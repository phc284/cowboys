const express = require('express');
const app = express();
require('dotenv').config({
  path: '../env.env'
});
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const helpers = require('./helpers');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//On the server this will serve up our build folder as static files
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api/news', (req, res) => {
  helpers.getNews(res)
    .then((data) => {
      console.log('news data', data)
      res.send(data.data)
    });
});

app.get('/api/twitter', (req, res) => {
  helpers.getTwitterHandles(res);
});

// helpers.getSchedule();


// app.get('/api/schedule', (req, res) => {
//   helpers.getSchedule(res);
// });
//
//
// app.get('/api/teamstats2', (req, res) => {
//   helpers.getTeamStats(res);
// });

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
if (!process.env.DEV) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'../client/build/index.html'));
  });
}


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
