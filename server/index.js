const path = require('path');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.use(express.static(path.join(__dirname, '../dist')));


const PORT = process.env.port || 3005;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
