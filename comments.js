// Create web server using express
const express = require('express');
const app = express();
const port = 3000;

// Import the comments.json file
const comments = require('./comments.json');

// Add a route to the server at the path /comments
app.get('/comments', (req, res) => {
  // Send back the comments JSON object
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});