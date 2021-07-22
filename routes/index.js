const ReviewsRouter = require('./reviews');
const FamillysRouter = require('./famillys');

module.exports = (app) => {
  app.use('/reviews', ReviewsRouter);
  app.use('/royalfamilly', FamillysRouter);
};
