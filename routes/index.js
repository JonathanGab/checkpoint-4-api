const ReviewsRouter = require('./reviews');
const FamillysRouter = require('./famillys');
const AssetsRouter = require('./assets');

module.exports = (app) => {
  app.use('/reviews', ReviewsRouter);
  app.use('/royalfamilly', FamillysRouter);
  app.use('/assets', AssetsRouter);
};
