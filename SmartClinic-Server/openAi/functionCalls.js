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
         },  
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
      description: 'Book an appointment by choosing a slot index. make sure to use base 0',
      parameters: {
        type: 'object',
        properties: {
          index: { 
            type: 'number', 
            description: 'Index of the chosen slot (0-based)',
            minimum: 1 // Added validation
          },
          doctorId: {
             type: 'number', 
            description: 'ID of the doctor',
            minimum: 1
          }
        },
        required: ['index'],
        additionalProperties: true // Prevent unexpected args 
      }
    }
  }
];

export default tools;