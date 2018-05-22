const express = require("express");
const app = express();
const fs = require("fs");


// mLab database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://aselee:aselee9324@ds123790.mlab.com:23790/aca-cp1");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
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
app.get("/dateTime", (request, response) => response.send(Date()));
fs.readFile("server/data.csv", "utf8", (err,data) => {
  if(err) throw(err)
  const dataInfo = data.split("\n")
  app.get("/newComments", (request, response) => {
    response.send(dataInfo[1].split(",")[0])
  })
  app.get("/newTasks", (request, response) => {
    response.send(dataInfo[1].split(",")[1])
  })
  app.get("/newOrders", (request, response) => {
    response.send(dataInfo[1].split(",")[2])
  })
  app.get("/tickets", (request, response) => {
    response.send(dataInfo[1].split(",")[3])
  })
})

// Calling server
app.listen(3011, (err) => {
if (err) {
  return console.log("Oops", err);
}
});