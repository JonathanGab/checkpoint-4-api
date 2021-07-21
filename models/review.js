const db = require('../db');

const createReview = async ({ firstname, lastname, email, review }) => {
  return db.contact.create({
    data: {
      firstname,
      lastname,
      email,
      review,
    },
  });
};
module.exports = {
  createReview,
};
