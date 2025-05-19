import { handleChatWithAI } from "../LangChain/handleChatAi.js";
import { chatWithBot } from "../openAi/assistance.js";
import { transcribeAudio } from "../Services/openAi/voiceService.js";
import { successResponse ,errorResponse } from "../Traits/response.js";
export const textChatBot = async (req, res) => {
    try {
        const { userName, message, doctor} = req.body;
        const result = await chatWithBot(userName, message, doctor);
        successResponse(res, result, 'Chatbot response', 200);
    } catch (error) {
        console.error('Chatbot error:', error.message);
        errorResponse(res, error, 500);
    }
    }

    export const voiceTranscribe =   async (req, res) => {
        try { 
          const { audioBase64, fileType, userName, doctor } = req.body;

        const textFromAudio= await  transcribeAudio(audioBase64, fileType);
        const result = await chatWithBot(userName, textFromAudio, doctor);
        successResponse(res, result, 'Chatbot response', 200);
        } catch (err) {
          console.error('Error in base64 transcription:', err);
          errorResponse(res, err, 500);
        }
      };

      export const langChainChatbot = async (req , res)=>{
        try {
             const {  message , userName , doctor} = req.body;
             const result = await handleChatWithAI( userName ,message, doctor);
            successResponse(res, result, 'Chatbot response', 200);
        } catch (error) {
             console.error('Error :', error);
            errorResponse(res, error, 500);
        }
      }

       export const langChainVoiceChatbot = async (req , res)=>{
        try {
              const { audioBase64, fileType, userName, doctor } = req.body;
               const textFromAudio= await  transcribeAudio(audioBase64, fileType);
             const result = await handleChatWithAI( userName ,textFromAudio, doctor);
            successResponse(res, result, 'Chatbot response', 200);
        } catch (error) {
             console.error('Error transcription:', error);
            errorResponse(res, error, 500);
        }
      }