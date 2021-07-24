const db = require('../db');

module.exports = async function seed() {
  await db.picture.createMany({
    data: [
      {
        picture:
          'https://s1.1zoom.me/big0/495/Lake_Mountains_Scenery_437997.jpg',
      },
      {
        picture:
          'https://images.hdqwalls.com/download/desert-dunes-kd-1280x720.jpg',
      },
      {
        picture:
          'https://mitsou-com.s3.amazonaws.com/app/uploads/2020/01/03171807/IMG_1717-1280x720.jpg',
      },
    ],
  });
};

module
  .exports()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });

// npx prisma migrate dev
// npx prisma db seed --preview-feature
// npx prisma migrate reset
