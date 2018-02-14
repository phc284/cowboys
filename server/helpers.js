const axios = require('axios');
const data = require('./data');


var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.2", true);

const SPORTS_USERNAME = process.env.SPORTS_FEED_USERNAME;
const SPORTS_PASSWORD = process.env.SPORTS_FEED_PASSWORD;

msf.authenticate(SPORTS_USERNAME, SPORTS_PASSWORD);

const getNews = (res) => {
  var today = new Date();
  var dd = "0" + today.getDate();
  var mm = today.getMonth()+1 + "";
  var yyyy = today.getFullYear() + "";

  if (mm.length === 1) {
    mm = "0" + mm;
  }
  if (dd.length === 3) {
    dd = dd.slice(1, 3)
  }

  var url = 'https://newsapi.org/v2/everything?' +
            'q=dallas%20AND%20cowboys%20NOT%20(cheerleader%20ORnsfw)&' +
            `from=${yyyy}-${mm}-${dd-1}&` +
            'sortBy=popularity&' +
            'language=en&' +
            `apiKey=${process.env.NEWS_API_KEY}`;

  return axios.get(url)
  // axios.get(url)
  //   .then((data) => {
  //     res.send(data.data.articles);
  //   })
}

const getTwitterHandles = (res) => {
  res.send(data.twitter_handles);
}

//
const getSchedule = (res) => {
  msf.getData('nfl', '2017-2018-regular','team_gamelogs', 'json', {team: 'was'})
    .then((result) => {
      var data = result.teamgamelogs.gamelogs.map((game) => {
        var obj = {};
        obj.homeTeam = game.game.homeTeam
        obj.awayTeam = game.game.awayTeam;
        obj.homeScore = game.stats.PointsFor;
        obj.awayScore = game.stats.PointsAgainst;
        return obj;
      });
      console.log('data', data)
    });
}


// const getTeamStats = (res) => {
//   var teamStats = msf.getData('nfl', '2017-2018-regular','overall_team_standings', 'json', {team: 'phi'});
//   console.log(teamStats)
//   res.send(teamStats)
//   // var obj = {}
//   // var data = teamStats.overallteamstandings.teamstandingsentry[0];
//   // obj.TotalPassing = data.stats.PassNetYards['#text']
//   // obj.TotalRushing = data.stats.RushYards['#text']
//   // obj.TotalPointsFor = data.stats.PointsFor['#text']
//   // obj.TotalPointsAgainst = data.stats.PointsAgainst['#text']
//   // res.send(obj);
// }

module.exports = {
  getNews,
  getTwitterHandles,
  getSchedule,
  // getTeamStats
}
