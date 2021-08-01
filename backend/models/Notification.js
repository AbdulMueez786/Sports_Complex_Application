const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Notification = new Schema(
  {
    Game: {
      type: String,
    },
    Player1_username: {
      type: String,
    },
    Player2_username: {
      type: String,
    },
  },
  {
    collection: "notifications",
  }
);

module.exports = mongoose.model("Notification ", Notification);
