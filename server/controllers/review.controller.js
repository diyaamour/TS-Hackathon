const {Review} = require("../models/review.model");

const handleCreateReview = async (req, res) => {
    console.log('controller: handleCreateReview', req.body);

    try {

        const newReview = new Review({
            teacher,
            organization,
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





