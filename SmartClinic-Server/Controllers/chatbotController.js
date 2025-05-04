import { chatWithBot } from "../openAi/assistance.js";


export const textChatBot = async (req, res) => {
    try {
        const { userName, message, doctor} = req.body;
        const result = await chatWithBot(userName, message, doctor);
        res.status(200).json(result);
    } catch (error) {
        console.error('Chatbot error:', error.message);
        res.status(error.status || 500).json({ error: error.message || 'Internal server error' });
    }
    }