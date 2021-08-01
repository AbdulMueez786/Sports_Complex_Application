const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
let Match = new Schema(
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
    Player1_Ranking: {
      type: String,
    },
    Player2_Ranking: {
      type: String,
    },
    p1_attendence: {
      type: String,
    },
    p2_attendence: {
      type: String,
    },
    Result: {
      type: String,
    },
    Game_Court: {
      type: String,
    },
    Game_Time: {
      type: String,
    },
    Couch_username: {
      type: String,
    },
    DAY: {
      type: String,
    },
  },
  {
    collection: "matches",
  }
);

module.exports = mongoose.model("Match", Match);
