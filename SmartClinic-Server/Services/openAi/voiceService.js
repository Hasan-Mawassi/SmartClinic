import { transcribeWithWhisper } from './openAiService.js';
import path from 'path';
import fs from 'fs';

export const transcribeAudio = async (audioBase64, fileType) => {

const tmpDir = path.join(process.cwd(), 'tmp'); 
if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
}
const tempFilePath = path.join(tmpDir, `voice.${fileType}`);
const buffer = Buffer.from(audioBase64, 'base64');
fs.writeFileSync(tempFilePath, buffer);

  // Transcribe with Whisper
  const transcription = await transcribeWithWhisper(tempFilePath);
  console.log('Transcription:', transcription);

//   // Cleanup
  fs.unlinkSync(tempFilePath);

  return  transcription ;
}