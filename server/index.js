const express = require("express");
const app = express();
const fs = require("fs");

// mLab database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://aselee:aselee9324@ds123790.mlab.com:23790/aca-cp1");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(parser.json());

const messageRout = require("./Routes/messageRouter");
app.use(messageRout);
const orderRout = require("./Routes/orderRouter");
app.use(orderRout);
const taskRout = require("./Routes/taskRouter");
app.use(taskRout);
const foxesRout = require(".Routes/foxesRouter");
app.use(foxesRout);

//data.csv


// Calling server
app.listen(3011, (err) => {
if (err) {
  return console.log("Oops", err);
}
});