import express from 'express';
const app = express();

// Route to test if it's running
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Set the server to listen on a port
app.listen(5000, () => {
  console.log('Server is running ...');
});