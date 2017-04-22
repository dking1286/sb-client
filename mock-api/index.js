const express = require('express');
const companies = require('./companies.json');

const skills = require('./skills.json');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/companies', (req, res) => {
  res.json({ companies });
});

app.get('/roles/:roleId', (req, res) => {
  res.json({
    role: {
      name: 'iOS Engineer at Snap Inc.',
      skills
    }
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
