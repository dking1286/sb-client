const express = require('express');
const companies = require('./companies.json');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/companies', (req, res) => {
  res.json({ companies });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
