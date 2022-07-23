const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "alesmonde0",
    email: "nwestnedge0@cbc.ca",
    password: "1234",
  },
  {
    username: "jwilloughway1",
    email: "rmebes1@sogou.com",
    password: "1234",
  },
  {
    username: "iboddam2",
    email: "cstoneman2@last.fm",
    password: "1234",
  },
  {
    username: "dstanmer3",
    email: "ihellier3@goo.ne.jp",
    password: "1234",
  },
  {
    username: "djiri4",
    email: "gmidgley4@weather.com",
    password: "1234",
  },
  {
    username: "msprague5",
    email: "larnout5@imdb.com",
    password: "1234",
  },
  {
    username: "mpergens6",
    email: "hnapleton6@feedburner.com",
    password: "1234",
  },
  {
    username: "tpenniell7",
    email: "kperigo7@china.com.cn",
    password: "1234",
  },
  {
    username: "msabbins8",
    email: "lmongain8@google.ru",
    password: "1234",
  },
  {
    username: "jmacarthur9",
    email: "bsteen9@epa.gov",
    password: "1234",
  },
];

const userSeed = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = userSeed;
