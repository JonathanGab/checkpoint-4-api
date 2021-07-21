const ReviewsRouter = require('./reviews');

module.exports = (app) => {
  app.use('/reviews', ReviewsRouter);
};
