require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.AWS_USR.replace(/['"]/g, ''),
    "password": process.env.PASS.replace(/['"]/g, ''),
    "database": process.env.AWS_DB.replace(/['"]/g, ''),
    "host": 'soundbits.cvidf6oikyfm.us-east-1.rds.amazonaws.com',
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.AWS_USR.replace(/['"]/g, ''),
    "password": process.env.PASS.replace(/['"]/g, ''),
    "database": process.env.AWS_DB.replace(/['"]/g, ''),
    "host": 'soundbits.cvidf6oikyfm.us-east-1.rds.amazonaws.com',
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.AWS_USR.replace(/['"]/g, ''),
    "password": process.env.PASS.replace(/['"]/g, ''),
    "database": process.env.AWS_DB.replace(/['"]/g, ''),
    "host": 'soundbits.cvidf6oikyfm.us-east-1.rds.amazonaws.com',
    "dialect": "mysql"
  }
};
