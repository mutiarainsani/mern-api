const express = require('express');

const app = express();

app.use(() => {
  console.log('hello server...');
  console.log('hello server...1');
});

app.listen(4000);
