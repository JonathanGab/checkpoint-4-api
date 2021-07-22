// const _ = require('lodash');
const FamillysRouter = require('express').Router();
const Familly = require('../models/familly');
const handleImageUpload = require('../middlewares/handleImageUpload');

FamillysRouter.get('/', async (req, res) => {
  try {
    const allFamilly = await Familly.findFamilly();
    console.log(allFamilly);
    return res.json(allFamilly);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Il y a eu une erreur');
  }
});

FamillysRouter.post(
  '/',
  handleImageUpload.single('avatar'),
  async (req, res) => {
    const { firstname, lastname, description } = req.body;
    let avatar;
    if (req.file && req.file.path) {
      avatar = req.file.path;
    }
    return Familly.createFam({
      firstname,
      lastname,
      description,
      avatar,
    })
      .then((fam) => {
        res.json(fam);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send('error for create a royal person');
      });
  }
);

FamillysRouter.get('/:id', async (req, res) => {
  return Familly.findOne(parseInt(req.params.id, 10))
    .then((fam) => {
      res.json(fam);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send('Il y a eu une erreur lors de la récupération de cet animal');
    });
});

module.exports = FamillysRouter;
