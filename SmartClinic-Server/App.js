import express from 'express';
import db from './Database/connection/connection.js';
const app = express();
db.connect()
  .then(client => {
    console.log("Database connected successfully!!!");
    client.release(); 
  })
  .catch(err => {
    console.error("Database connection error:", err.stack);
    process.exit(1); 
  });
// Route to test if it's running
app.get('/', (req, res) => {
  res.send('Hello from the server !!!!');
});

// Set the server to listen on a port
app.listen(5000,'0.0.0.0', () => {
  console.log('Server is running ...');
});