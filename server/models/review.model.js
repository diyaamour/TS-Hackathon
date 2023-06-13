const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
    },
    body: {
      type: String,
      required: [true, "{PATH} is required."],
    },
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true } 
);
const Review = mongoose.model("Review", ReviewSchema);
console.log("Review model created");
module.exports = { Review: Review };
