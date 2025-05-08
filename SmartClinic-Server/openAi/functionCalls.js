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

export default tools;