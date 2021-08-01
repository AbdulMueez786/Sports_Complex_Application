const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
let Priority = new Schema(
  {
    username: {
      type: String,
    },
    Day: {
      type: String,
    },
    Tennis: {
      type: String,
    },
    badminton: {
      type: String,
    },
    table_tennis: {
      type: String,
    },
    Squash: {
      type: String,
    },
  },
  {
    collection: "prioritys",
  }
);

module.exports = mongoose.model("Priority", Priority);
