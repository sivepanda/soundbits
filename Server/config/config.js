require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.AWS_USR,
    "password": process.env.PASS,
    "database": process.env.AWS_DB,
    "host": 'soundbits.cvidf6oikyfm.us-east-1.rds.amazonaws.com',
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.AWS_USR,
    "password": process.env.PASS,
    "database": process.env.AWS_DB,
    "host": 'soundbits.cvidf6oikyfm.us-east-1.rds.amazonaws.com',
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.AWS_USR,
    "password": process.env.PASS,
    "database": process.env.AWS_DB,
    "host": 'soundbits.cvidf6oikyfm.us-east-1.rds.amazonaws.com',
    "dialect": "mysql"
  }
};
