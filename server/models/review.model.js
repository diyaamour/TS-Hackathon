const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  teacher: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    originalName: String,
    filename: String,
    path: String,
    size: Number,
    // Add any other relevant file metadata fields here
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



const Review = mongoose.model("Review", reviewSchema);
console.log("Review model created");
module.exports = { Review: Review };


