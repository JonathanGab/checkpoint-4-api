const PicturesRouter = require('express').Router();
const Pictures = require('../models/picture');

PicturesRouter.get('/', async (req, res) => {
  try {
    const allPictures = await Pictures.findMany();

    return res.json(allPictures);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Il y a eu une erreur');
  }
});
module.exports = PicturesRouter;
