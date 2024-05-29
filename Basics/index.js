const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define another route for demonstration
app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
