// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });
// 6a3ccd3c578b08aafc4fe043f1d5e96c

const request = require('request');
var apiKey = '6a3ccd3c578b08aafc4fe043f1d5e96c'

request({
  url : `https://api.darksky.net/forecast/${apiKey}/47.6338217,-122.3215448`,
  json : true
 }, (error, response, body) => {
   if (!error && response.statusCode === 200) {
      console.log(body.currently.temperature);
   } else {
     console.log('Unable to fetch weather.');
   }
 });
