'use strict';

require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/build`));

app.get('*', (request, response) => {
  response.sendFile(`${__dirname}/build/index.html`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`); // eslint-disable-line
});
