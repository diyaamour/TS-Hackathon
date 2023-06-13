const express = require("express");
const { 
  handleCreateReview, 
  handleGetAllReviews ,
  handleGetReviewById,
  handleUpdateReviewById,
  handleDeleteReviewById
} = require("../controllers/review.controller");
const router = express.Router();
router.post("/", handleCreateReview);
router.get("/", handleGetAllReviews);
router.get("/:id", handleGetReviewById);
router.put("/:id", handleUpdateReviewById);
router.delete('/:id', handleDeleteReviewById);
module.exports = {
  reviewRouter: router,
};
