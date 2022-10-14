const path = require("path");
const express = require("express");
const hbs = require("hbs");
const forecast = require("./utils/forecast");
const geoCode = require("./utils/geocode");

const app = express();

//define paths for Express config
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup handlebars engine and views location
app.set("views", viewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

//setup static directory to serve

app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather app",
    name: "Vlad",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About app",
    name: "Vlad",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help app",
    name: "Vlad",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "you must provide an address",
    });
  }

  geoCode(req.query.address, (error, { lat, long, oras } ={}) => {
    if (error) {
      return req.send({ error });
    }
    forecast(lat, long, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
        res.send({
          forecast: forecastData,
          oras,
          address: req.query.address,
        });
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "you must provide a search term",
    });
  }
  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Vlad",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Vlad",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("serverul merge pe portul 3000");
});
