const request=require('request')

const forecast = (lat, long, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=ccc103e68d1512ae868f2bed90dadace&query='+lat+','+long+'';

  request({ url, json: true }, (error, {body}) => {
    //url si json sun proprietati..detalii pe pagina de documenatie npm request
    if (error) {
      callback("nu se poate conecta la serviciul de vreme", undefined);
    } else if (body.error) {
      callback("Nu s-a putut accesa locatia");//si aici puteam sa pun undefined, same thing
    } else {
      callback(undefined, {
        oras: body.location.region+", "+ body.location.country ,
        vremea: body.current.weather_descriptions,
        temperatura: body.current.temperature,
        feelslike: body.current.feelslike,
      }); //body e obj si current at
    }
  });
};

module.exports=forecast