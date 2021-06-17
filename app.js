const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");

    // res.send("This server is currently is runnning");
});

app.post("/", (req, res) => {
    console.log(req.body.cityName);
    console.log("Post request recieved.");
})


const city = "phnom penh";
const apiKey = "72d8a7df3d2cfa42e98082f3e3d5b5dd";
const units = "Metric"
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units + "&appid=" + apiKey + "";
const weatherIcon = "http://openweathermap.org/img/wn/03d@2x.png";


// https.get(url, (response) => { // console.log(response);
//     response.on("data", (d) => {
//         const data = JSON.parse(d);
//         const weather = data.weather[0].description;
//         const temp = data.main.temp;
//         res.write("<p>The Weather is currently " + weather + "</p>");
//         res.write("<h1>The temperatur in Phnom Penh is " + temp + " degress Celcius </h1>");
//         res.write("<img src=" + weatherIcon + ">");
//         res.send();
//     });
// });


app.listen(3000, () => {
    console.log("This server is running on port 3000");
});
