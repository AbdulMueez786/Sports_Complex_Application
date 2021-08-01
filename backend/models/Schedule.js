const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
let Schedule = new Schema(
  {
    username: {
      type: String,
    },
    Mon: {
      type: String,
    },
    Tue: {
      type: String,
    },
    Wed: {
      type: String,
    },
    Thu: {
      type: String,
    },
    Fri: {
      type: String,
    },
    Sat: {
      type: String,
    },
  },
  {
    collection: "schedules",
  }
);

module.exports = mongoose.model("Schedule", Schedule);
