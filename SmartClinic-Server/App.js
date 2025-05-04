import express from 'express';
import env from 'dotenv';
import Routes from './Routes/route.js';
import { chatWithBot } from './openAi/assistance.js';
const app = express();
env.config();
app.use(express.json()); 

app.use(Routes)
app.post('/ai/chat',chatWithBot)
// Route to test if it's running
app.get('/', (req, res) => {
  res.send('Hello from the server !!!!');
});

// Set the server to listen on a port
app.listen(5000,'0.0.0.0', () => {
  console.log('Server is running ...');
});
export default app;