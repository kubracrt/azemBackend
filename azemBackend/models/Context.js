const mongoose = require("mongoose");

const contextSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    email: {
      type: String,
    },
    message: {
      type: String,
      default: "",
    },
  },
  {
    collection: "Contexts",
  }
);

exports.Context = mongoose.model("Context", contextSchema);
