const db = require('../db');

const createReview = async ({ firstname, email, review }) => {
  return db.contact.create({
    data: {
      firstname,
      email,
      review,
    },
  });
};
module.exports = {
  createReview,
};
