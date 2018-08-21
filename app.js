const request = require('request');

request({
  url : 'https://maps.googleapis.com/maps/api/geocode/json?address=1820%20lombard%20ave',
  json : true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
