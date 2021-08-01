const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
let Player = new Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    rank_tennis: {
      type: String,
    },
    rank_badminton: {
      type: String,
    },
    rank_table_tennis: {
      type: String,
    },
    rank_Squash: {
      type: String,
    },
    First_time_login: {
      type: String,
    },
    openent_rank_tennis: {
      type: String,
    },
    openent_rank_badminton: {
      type: String,
    },
    openent_rank_table_tennis: {
      type: String,
    },
    openent_rank_table_Squash: {
      type: String,
    },
  },
  {
    collection: "players",
  }
);

module.exports = mongoose.model("Player", Player);
