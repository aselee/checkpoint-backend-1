const express = require("express");
const app = express();
const fs = require("fs");

// mLab database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://aselee:aselee9324@ds123790.mlab.com:23790/aca-cp1");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const app = express();
app.use(express.static('public'));
// app.use(parser.json());

const messageRout = require("./Routes/messageRouter");
app.use(messageRout);
const orderRout = require("./Routes/orderRouter");
app.use(orderRout);
const taskRout = require("./Routes/taskRouter");
app.use(taskRout);
const foxesRout = require(".Routes/foxesRouter");
app.use(foxesRout);

//data.csv
app.get("/dateTime", (request, response) => response.send(Date().toLocaleString()));
app.get("/newComments", function (request, response) {
  fs.readFile("server/data.csv", "utf8", function (err, data){
    const dataInfo = data.split("\n")[1];
    return response.send(dataInfo.split(",")[0]);
  });
});
app.get("/newTasks", function (request, response) {
  fs.readFile("server/data.csv", "utf8", function (err, data){
    const dataInfo = data.split("\n")[1];
    return response.send(dataInfo.split(",")[1]);
  });
});
app.get("/newOrders", function (request, response) {
  fs.readFile("server/data.csv", "utf8", function (err, data){
    const dataInfo = data.split("\n")[1];
    return response.send(dataInfo.split(",")[2]);
  });
});
app.get("/tickets", function (request, response) {
  fs.readFile("server/data.csv", "utf8", function (err, data){
    const dataInfo = data.split("\n")[1];
    return response.send(dataInfo.split(",")[3]);
  });
});


// Calling server
app.listen(3011, (err) => {
if (err) {
  return console.log("Oops", err);
}
});