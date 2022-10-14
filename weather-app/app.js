const request = require("request");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Provide address");
} else {
  geoCode(address, (error, { lat, long, oras } = {}) => {
    if (error) {
      return console.log(error);
    }
    forecast(lat, long, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(oras); //o iau din forecast.js
      console.log(forecastData);
    });
  });
}
