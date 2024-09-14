const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required:true
    },
    password: {
      type: String,
    },
  },
  {
    collection: "Admin",
  }
);

module.exports = mongoose.model("Admin", adminSchema);
