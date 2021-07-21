const db = require('../db');

const createReview = async ({ firstname, lastname, review }) => {
  return db.contact.create({
    data: {
      firstname,
      lastname,
      review,
    },
  });
};
module.exports = {
  createReview,
};
