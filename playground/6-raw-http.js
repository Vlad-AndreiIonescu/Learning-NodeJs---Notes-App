const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=ccc103e68d1512ae868f2bed90dadace&query=45,-75&units=f";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("Eroaree", error);
});
request.end();
