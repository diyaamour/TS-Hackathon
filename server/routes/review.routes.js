const express = require("express");
const router = express.Router();
const multer = require('multer');
const {Review} = require('../models/review.model');
// handleCreateReview,
const {
  handleCreateReview,
  handleGetAllReviews,
  handleGetReviewById,
  handleUpdateReviewById,
  handleDeleteReviewById,
} = require('../controllers/review.controller');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/Users/diyaammour/Desktop/coding_dojo/dojo_stacks/TS/hackathonTS/uploads'); // Specify the destination folder for file uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname); // Generate a unique filename
  },
});

const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  const { title, body } = req.body;
  const file = req.file;
  try {

    const newReview = new Review({
      title,
      body,
      image: {
        originalName: file.originalname,
        filename: file.filename,
        path: file.path,
        size: file.size,
      },
    });

    const review = await newReview.save();
    console.log('Received data:', { title, body, file })
    return res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    return res.status(400).json({ ...error, message: error.message });
  }
});

// router.post('/', upload.single('image'), handleCreateReview);

router.get('/', handleGetAllReviews);

router.get('/:id', handleGetReviewById);

router.put('/:id', upload.single('image'), handleUpdateReviewById);

router.delete('/:id', handleDeleteReviewById);



module.exports = {
  reviewRouter: router,
};


// const { 
//   handleCreateReview, 
//   handleGetAllReviews ,
//   handleGetReviewById,
//   handleUpdateReviewById,
//   handleDeleteReviewById
// } = require("../controllers/review.controller");
// const router = express.Router();
// router.post("/", handleCreateReview);
// router.get("/", handleGetAllReviews);
// router.get("/:id", handleGetReviewById);
// router.put("/:id", handleUpdateReviewById);
// router.delete('/:id', handleDeleteReviewById);
// module.exports = {
//   reviewRouter: router,
// };
