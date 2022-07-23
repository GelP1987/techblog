const userSeed = require("./user-seed");
const postSeed = require("./post-seed");
const commentSeed = require("./comment-seed");

const sequelize = require("../config/connection");

const seed = async () => {
  await sequelize.sync({ force: true });
  console.log("------- Sequelize Synced -------");
  await userSeed();
  console.log("------- Users Seeded -------");
  await postSeed();
  console.log("------- Posts Seeded -------");
  await commentSeed();
  console.log("------- Comments Seeded -------");
  process.exit(0);
};

seed();
