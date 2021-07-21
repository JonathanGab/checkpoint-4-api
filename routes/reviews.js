const ReviewsRouter = require('express').Router();
const asyncHandler = require('express-async-handler');
const Review = require('../models/review');
const emailer = require('../mailer');
const { EMAIL_SENDER } = require('../env');

ReviewsRouter.post(
  '/',
  asyncHandler(async (req, res) => {
    console.log(req.body);
    const { lastname, firstname, email, review } = req.body;
    try {
      const newReview = await Review.createReview({
        firstname,
        lastname,
        email,
        review,
      });
      await emailer.sendMail({
        from: EMAIL_SENDER,
        to: newReview.email,
        subject: 'your request has been registered',
        text: 'thank you for your message, your request will be treated as soon as possible',
      });
      res.status(200).send(newReview);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  })
);

module.exports = ReviewsRouter;
