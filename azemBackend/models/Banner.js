const mongoose = require("mongoose");


const bannerSchema = mongoose.Schema(
    {
      TamamlananProje: {
        type: Number,
      },
      TecrübeYili: {
        type: Number,
      },
      Müsteri: {
        type: Number,
      },
    },
    {
      collection: "Banner",
    }
  );
  
  module.exports = mongoose.model("Banner", bannerSchema);

  