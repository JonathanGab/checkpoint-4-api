const db = require('../db');
const { API_BACK } = require('../env');

const createFam = async ({ firstname, lastname, description, avatar }) => {
  return db.royalFamily.create({
    data: {
      firstname,
      lastname,
      description,
      avatar:
        typeof avatar === 'string'
          ? avatar.replace(`${API_BACK}/`, '')
          : avatar,
    },
  });
};

const findFamilly = async () => {
  const fam = await db.royalFamily.findMany();
  return fam.map((person) => {
    let { avatar } = person;
    if (
      avatar &&
      !avatar.startsWith('http://') &&
      !avatar.startsWith('https://')
    ) {
      avatar = `${API_BACK}/${avatar}`;
    }
    return {
      ...person,
      avatar,
    };
  });
};

module.exports = {
  createFam,
  findFamilly,
};
