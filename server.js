const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const superagent = require('superagent');

dotenv.config();

const app = express();
app.use(cors());

app.get('/yelp/parking', (req, res) => {
  return superagent(process.env.YELP_API)
    .set('Authorization', `Bearer ${process.env.YELP_API_KEY}`)
    .query({ location: req.query.location, term: 'parking' })
    .then((response) => {
      return res.json(response.body);
    });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
