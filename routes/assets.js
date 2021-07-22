const AssetsRouter = require('express').Router();
const Assets = require('../models/asset');
const { RecordNotFoundError } = require('../error-types');

AssetsRouter.post('/', async (req, res) => {
  const { weapon, price, weaponImage, quantity } = req.body;
  try {
    const newAssets = await Assets.createAsset({
      weapon,
      price: parseInt(price, 10),
      weaponImage,
      quantity: parseInt(quantity, 10),
    });
    res.status(200).send(newAssets);
  } catch (error) {
    console.log(error);
    res.send(500).send(error);
  }
});

AssetsRouter.get('/:id', async (req, res) => {
  return Assets.findOne(parseInt(req.params.id, 10))
    .then((asset) => {
      res.json(asset);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send('Il y a eu une erreur lors de la récupération de cet animal');
    });
});

AssetsRouter.get('/', async (req, res) => {
  try {
    const allAssets = await Assets.findAllAssets();

    return res.json(allAssets);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Il y a eu une erreur');
  }
});

AssetsRouter.delete('/:id', async (req, res) => {
  return Assets.destroy(req.params.id)
    .then((assets) => {
      res.json(assets);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Il y a eu une erreur lors de la suppression');
    });
});

AssetsRouter.patch('/:id', async (req, res) => {
  const existingAssets = await Assets.findOne(req.params.id);
  if (!existingAssets) throw new RecordNotFoundError();
  await Assets.updateAssets(req.params.id, req.body);
  return res.json({ ...existingAssets, ...req.body });
});

module.exports = AssetsRouter;
