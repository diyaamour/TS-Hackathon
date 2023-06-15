const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
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


// module.exports = {Post : Post};
// const Post = mongoose.model('Post', postSchema);

// const Review = mongoose.model("Review", ReviewSchema);
// console.log("Review model created");
// module.exports = { Review: Review };
// const ReviewSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "{PATH} is required."],
//       minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
//     },
//     body: {
//       type: String,
//       required: [true, "{PATH} is required."],
//     },
//     image: {
//       type: String,
//     },
//   },
//   { timestamps: true } 
// );