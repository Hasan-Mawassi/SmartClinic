
import OpenAI from 'openai';
import { extractDateFromText, bookAppointmentByIndex, generateAppointmentList } from '../Services/openAi/openAiService.js';
import { generateAvailableSlots } from '../Services/openAi/slots.js';
import { getSession, clearSession } from '../Services/openAi/sessionManager.js';
import { timeList } from '../utils/timeList.js';
const openai =  new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    maxRetries: 3 
  });

// Updated to tools array with nested function declarations
const tools = [
  {
    type: "function",
    function: {
      name: 'getAvailableSlots',
      description: 'Extract date from message and fetch available appointment slots',
      parameters: {
        type: 'object',
        properties: {
          text: { 
            type: 'string', 
            description: 'The user message which may contain a date',
          
          }
        },
        required: ['text'],
        strict: true // Enforce schema compliance :cite[2]
      }
    }
  },
  {
    type: "function",
    function: {
      name: 'bookAppointment',
      description: 'Book an appointment by choosing a slot index',
      parameters: {
        type: 'object',
        properties: {
          index: { 
            type: 'number', 
            description: 'Index of the chosen slot (0-based)',
            minimum: 1 // Added validation
          }
        },
        required: ['index'],
        additionalProperties: false // Prevent unexpected args :cite[8]
      }
    }
  }
];

export async function chatWithBot(req, res) {
  const { userName, message, doctor} = req.body;
  const session = getSession(userName);

  // Initialize conversation history with JSON mode requirement :cite[2]
  if (!session.history) {
    session.history = [
      { 
        role: 'system', 
        content: 'You are a helpful assistant for booking doctor appointments. Always respond with valid JSON when using tools.',
        response_format: { type: "json_object" }
      }
    ];
  }
  session.history.push({ role: 'user', content: message });

  // Updated API call with tools parameter
  const firstResponse = await openai.chat.completions.create({
    model: 'gpt-4.1-mini', // Updated to latest model :cite[2]
    messages: session.history,
    tools: tools,
    tool_choice: 'required', // Force tool usage when applicable :cite[6]
    
  });

  const msg = firstResponse.choices[0].message;
  session.history.push(msg);

  if (msg.tool_calls) { // Changed from function_call to tool_calls :cite[1]
    for (const toolCall of msg.tool_calls) {
      const { name, arguments: argsJson } = toolCall.function;
      const args = JSON.parse(argsJson);
      let result;

      switch (name) {
        case 'getAvailableSlots': {
         
          const dateISO = await extractDateFromText(args.text);
          session.date = dateISO;

          const slots = await generateAvailableSlots({
            doctorId: doctor.id ,
            dateISO,
            startTime: doctor.startTime,
            endTime: doctor.endTime ,
            slotDurationMinutes: doctor.slotDuration
          });
          session.available = slots;
          const listSlots =timeList(slots) 
          const aiText = await generateAppointmentList(dateISO, listSlots);
          result = { dateISO, listSlots, aiText };
          break;
        }
        case 'bookAppointment': {
          if (!session.available?.[args.index]) {
            throw new Error("Invalid slot index");
          }
          
          const booked = await bookAppointmentByIndex(
            session.available, 
            args.index, 
            userName
          );
          clearSession(userName);
          result = { booked };
          break;
        }
        default:
          result = { error: `Unknown function: ${name}` };
      }

      // Updated function response format with tool_call_id :cite[6]
      session.history.push({
        role: "tool",
        content: JSON.stringify(result),
        tool_call_id: toolCall.id // Required for context tracking
      });

      // Final response generation
      const finalResponse = await openai.chat.completions.create({
        model: 'gpt-4.1-mini',
        messages: session.history,
        response_format: { type: "text" } // Force natural language response
      });

      const assistantMsg = finalResponse.choices[0].message;
      session.history.push(assistantMsg);

      return res.json({ message: assistantMsg.content });
    }
  }

  // Fallback for non-tool responses
  return res.json({ message: msg.content });
}

