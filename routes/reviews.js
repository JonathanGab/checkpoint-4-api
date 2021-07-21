const ReviewsRouter = require('express').Router();
const asyncHandler = require('express-async-handler');
const Review = require('../models/review');

ReviewsRouter.post(
  '/',
  asyncHandler(async (req, res) => {
    console.log(req.body);
    const { lastname, firstname, review } = req.body;
    try {
      const newReview = await Review.createReview({
        firstname,
        lastname,
        review,
      });
      res.status(200).send(newReview);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  })
);

module.exports = ReviewsRouter;
