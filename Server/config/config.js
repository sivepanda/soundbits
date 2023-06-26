require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.AWS_USR,
    "password": process.env.PASS,
    "database": process.env.AWS_DB,
    "host": process.env.HOSTNM,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.AWS_USR,
    "password": process.env.PASS,
    "database": process.env.AWS_DB,
    "host": process.env.HOSTNM,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.AWS_USR,
    "password": process.env.PASS,
    "database": process.env.AWS_DB,
    "host": process.env.HOSTNM,
    "dialect": "mysql"
  }
};
