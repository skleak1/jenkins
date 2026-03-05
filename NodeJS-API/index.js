// Import Express Server
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Express API');
});

app.get('/search', (req, res) => {
  res.send('Inside Searching API');
});

app.listen(port, () => {
  console.log(`Express server started at http://localhost:${port}`);
});