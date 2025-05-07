
import OpenAI from 'openai';
import { extractDateFromText, bookAppointmentByIndex, generateAppointmentList } from '../Services/openAi/openAiService.js';
import { generateAvailableSlots } from '../Services/openAi/slots.js';
import { getSession, clearSession } from '../Services/openAi/sessionManager.js';
import { timeList } from '../utils/timeList.js';
import functionsTool from './functionCalls.js';

const openai =  new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    maxRetries: 3 
  });

// Updated to tools array with nested function declarations
const tools = functionsTool;

export const chatWithBot= async(userName, message, doctor)=> {
  const session = getSession(userName);

  // Initialize conversation history with JSON mode requirement 
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
    model: 'gpt-4.1', 
    messages: session.history,
    tools: tools,
    tool_choice: 'required', // Force tool usage when applicable 
    
  });

  const msg = firstResponse.choices[0].message;
  session.history.push(msg);

  if (msg.tool_calls) {
    for (const toolCall of msg.tool_calls) {
      const { name, arguments: argsJson } = toolCall.function;
      let result;
  
      try {
        const args = JSON.parse(argsJson);
  
        switch (name) {
          case 'getAvailableSlots': {
            const dateISO = await extractDateFromText(args.text);
            session.date = dateISO;
  
            const slots = await generateAvailableSlots({
              doctorId: doctor.id,
              dateISO,
              startTime: doctor.startTime,
              endTime: doctor.endTime,
              slotDurationMinutes: doctor.slotDuration
            });
  
            session.available = slots;
            const listSlots = timeList(slots);
            const aiText = await generateAppointmentList(dateISO, listSlots);
            result = { dateISO, listSlots, aiText };
            break;
          }
  
          case 'bookAppointment': {
            if (!session.available?.[args.index]) {
              result = { error: "Invalid slot index. Please choose a valid number from the list." };
              break;
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
      } catch (err) {
        result = { error: `Execution error: ${err.message}` };
      }
  
      // ALWAYS respond to tool_call_id, even on error
      session.history.push({
        role: "tool",
        content: JSON.stringify(result),
        tool_call_id: toolCall.id
      });
    }
  
    // Generate final response after all tool calls responded
    const finalResponse = await openai.chat.completions.create({
      model: 'gpt-4.1',
      messages: session.history,
      response_format: { type: "text" }
    });
  
    const assistantMsg = finalResponse.choices[0].message;
    session.history.push(assistantMsg);
  
    return { message: assistantMsg.content };
  }
  

  // Fallback for non-tool responses
  return { message: msg.content };
}

