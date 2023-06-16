const express = require("express");
const router = express.Router();
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const {Review} = require('../models/review.model');

aws.config.update({
  accessKeyId: 'AKIA4PQ7R3QKHQXYETPA',
  secretAccessKey: '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',
  region: 'us-east-1',
});

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

// const upload = multer({ storage });

const s3 = new aws.S3();
const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'ts-hackathon',
    acl: 'public-read', // Set the appropriate ACL for your use case
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + '_' + file.originalname);
    },
  }),
});

router.post('/', upload.single('image'), async (req, res) => {
  const { teacher, organization, title, body } = req.body;
  const file = req.file;
  try {

    const newReview = new Review({
      teacher,
      organization,
      title,
      body,
      image: {
        originalName: file.originalname,
        filename: file.filename,
        // path: file.path,
        url: file.location,
        size: file.size,
      },
    });

    const review = await newReview.save();
    console.log('Received data:', { teacher, organization, title, body, file })
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

