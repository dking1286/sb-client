const express = require('express');

const app = express();

app.get('/roles', (req, res) => {
  res.json({
    roles: [
      { name: 'hello' }
    ]
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
