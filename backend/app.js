const express = require("express");
const app = express();
const request = require('request');
const bodyParser = require('body-parser');

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Headers", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    return res.status(200).json({});
  };
  next();
});

app.use(bodyParser.json());


app.get('/api/compaign', (req, res, next) => {
  const URL = "https://i3gy725noe.execute-api.us-east-1.amazonaws.com/default/VisualizatorApi";
  request({
    url: URL,
    headers: { "x-api-key": "9Iaq5lP41La1PWe8XMRdRTQNTZCypPJ6NbdjHxy9" },
  },
    (err, response, body) => {
      if (err || response.statusCode != 200 ) {
        return res.status(500).send({ message: err })
      };
      return res.status(200).send({
        campaign: JSON.parse(response.body)
      });
    });
});



module.exports = app;
