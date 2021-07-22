const db = require('../db');

const createAsset = async ({ weapon, price, weaponImage, quantity }) => {
  return db.assets.create({
    data: {
      weapon,
      price: parseInt(price, 10),
      weaponImage,
      quantity: parseInt(quantity, 10),
    },
  });
};

const findAllAssets = async () => {
  return db.assets.findMany();
};

const destroy = (id) =>
  db.assets
    .delete({ where: { id: parseInt(id, 10) } })
    .then(() => true)
    .catch(() => false);

const updateAssets = async (id, { weapon, price, weaponImage, quantity }) => {
  return db.assets.update({
    where: { id: parseInt(id, 10) },
    data: {
      weapon,
      price,
      weaponImage,
      quantity,
    },
  });
};

const findOne = (id) =>
  db.assets.findFirst({ where: { id: parseInt(id, 10) } });

module.exports = {
  findOne,
  createAsset,
  findAllAssets,
  destroy,
  updateAssets,
};
