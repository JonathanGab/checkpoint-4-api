const ReviewsRouter = require('./reviews');
const FamillysRouter = require('./famillys');
const AssetsRouter = require('./assets');
const PicturesRouter = require('./pictures');

module.exports = (app) => {
  app.use('/reviews', ReviewsRouter);
  app.use('/royalfamilly', FamillysRouter);
  app.use('/assets', AssetsRouter);
  app.use('/pictures', PicturesRouter);
};
