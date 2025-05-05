import { chatWithBot } from "../openAi/assistance.js";
import { transcribeAudio } from "../Services/openAi/voiceService.js";

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

    export const voiceTranscribe =   async (req, res) => {
        try { 
          const { audioBase64, fileType, userName, doctor } = req.body;
      
          if (!audioBase64 || !fileType) {
            return res.status(400).json({ error: 'Missing audioBase64 or fileType' });
          }
        const textFromAudio= await  transcribeAudio(audioBase64, fileType);
        const result = await chatWithBot(userName, textFromAudio, doctor);
          res.status(200).json(result);
        } catch (err) {
          console.error('Error in base64 transcription:', err);
          res.status(500).json({ error: 'Internal server error' });
        }
      };