const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
      required: true,
      type: String
    },
    date: {
      required: true,
      type: String
    },
    task: {
      required: true,
      type: String
    },
   });

module.exports =  mongoose.model("task", schema);