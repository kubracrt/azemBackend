const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema({
  section: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
},
{
  collection: "Section",
}
);

module.exports = mongoose.model("Section", SectionSchema);
