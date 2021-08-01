const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
let Couch = new Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    Game: {
      type: String,
    },
  },
  {
    collection: "couchs",
  }
);

module.exports = mongoose.model("Couch", Couch);
