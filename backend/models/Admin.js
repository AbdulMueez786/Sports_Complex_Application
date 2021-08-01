const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
let Admin = new Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    collection: "admins",
  }
);
module.exports = mongoose.model("Admin", Admin);
