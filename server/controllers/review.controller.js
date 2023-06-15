const {Review} = require("../models/review.model");

const handleCreateReview = async (req, res) => {
    console.log('controller: handleCreateReview', req.body);

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

        const review = await Review.create({ title, body });
        return res.json(review);
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message });
    }
};


const handleGetAllReviews = async (req, res) => {
    console.log('controller: handleGetAllReviews');

    try {
        const reviews = await Review.find();
        return res.json(reviews);
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message });
    }
};

const handleGetReviewById = async (req, res) => {
    console.log('controller: handleGetReviewById', req.params);

    try {
        const review = await Review.findById(req.params.id);
        return res.json(review);
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message });
    }
};
const handleUpdateReviewById = async (req, res) => {
    console.log('controller: handleUpdateReviewById', req.params, req.body);

    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body,
            {
                runValidators: true,
                new: true
            });
        return res.json(review);
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message });
    }
};
const handleDeleteReviewById = async (req, res) => {
    console.log('controller: handleDeleteReviewById', req.params);

    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        return res.json(review);
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message });
    }
};


console.log("Review controller created");
module.exports = {
    handleCreateReview,
    handleGetAllReviews,
    handleGetReviewById,
    handleUpdateReviewById,
    handleDeleteReviewById
}
// handleCreateReview,

// router.post('/', upload.single('file'), async (req, res) => {
//     const { title, body } = req.body;
//     const file = req.file;
//     try {
//         const newPost = new Post({
//             title,
//             body,
//             file: {
//                 originalName: file.originalname,
//                 filename: file.filename,
//                 path: file.path,
//                 size: file.size,
//             },
//         });
//         await newPost.save();

//         res.status(200).json({ message: 'Form submitted successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });










// const Post = require('../models/review.model');






// const handleCreateReview = async (req, res) => {
//     console.log('controller: handleCreateReview', req.body);
//     console.log('controller: handleCreateReview', req.file);
//     try {

//         const { title, body } = req.body;
//         let image = null;

//         if (req.file) {
//             // The file was uploaded
//             image = req.file.filename;

//             // Save the file to the destination folder
//             const uploadDir = '/Users/diyaammour/Desktop/coding_dojo/dojo_stacks/TS/hackathonTS/uploads'; // Update the path to the destination folder
//             fs.renameSync(req.file.path, path.join(uploadDir, req.file.filename));
//         }// Store the image filename in the 'image' property

//         console.log('Received data:', { title, body, image });
        
//         const review = await Review.create({ title, body, image });
//         return res.json(review);
//     } catch (error) {
//         return res.status(400).json({ ...error, message: error.message });
//     }
// };
// const handleGetAllReviews = async (req, res) => {
//     console.log('controller: handleGetAllReviews');

//     try {
//         const reviews = await Review.find();
//         return res.json(reviews);
//     } catch (error) {
//         return res.status(400).json({ ...error, message: error.message });
//     }
// };
// const handleGetReviewById = async (req, res) => {
//     console.log('controller: handleGetReviewById', req.params);

//     try {
//         const review = await Review.findById(req.params.id);
//         return res.json(review);
//     } catch (error) {
//         return res.status(400).json({ ...error, message: error.message });
//     }
// };
// const handleUpdateReviewById = async (req, res) => {
//     console.log('controller: handleUpdateReviewById', req.params, req.body);

//     try {
//         const review = await Review.findByIdAndUpdate(req.params.id, req.body,
//             {
//                 runValidators: true,
//                 new: true
//             });
//         return res.json(review);
//     } catch (error) {
//         return res.status(400).json({ ...error, message: error.message });
//     }
// };
// const handleDeleteReviewById = async (req, res) => {
//     console.log('controller: handleDeleteReviewById', req.params);

//     try {
//         const review = await Review.findByIdAndDelete(req.params.id);
//         return res.json(review);
//     } catch (error) {
//         return res.status(400).json({ ...error, message: error.message });
//     }
// };
// console.log("Review controller created");
// module.exports = {
//     handleCreateReview,
//     handleGetAllReviews,
//     handleGetReviewById,
//     handleUpdateReviewById,
//     handleDeleteReviewById
// }