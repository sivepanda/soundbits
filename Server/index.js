const express = require('express')
const app = express()
const mysql = require('mysql')
require('dotenv').config();

// const db = mysql.createPool({
//     host: '192.168.56.1',
//     user: 'sa',
//     password: 'cat123',
//     database: 'Soundbits',
// });

// AWS HOSTED SERVER
const db_aws = mysql.createPool({
  connectionLimit : 1000,
  connectTimeout  : 1000000,
  acquireTimeout  : 60 * 60 * 1000,
  timeout         : 60 * 60 * 1000,
  host: process.env.HOSTNM,
  user: process.env.AWS_USR,
  password: process.env.PASS,
  database: process.env.AWS_DB,
});

db_aws.getConnection((err, connection) => {
    if (err) {
      console.error('Error acquiring database connection:', err);
      return;
    }
  
    const sql = 'SELECT * FROM Users';
    connection.query(sql, (err, results) => {
      connection.release(); // Release the connection back to the pool
  
      if (err) {
        console.error('Error executing SQL query:', err);
        return;
      }
  
      console.log('Query results:', results);
    });
  });

app.get("/", (req, res) => {
    
    
        
    const sqlInsert = "INSERT INTO Users (username, email, userPassword, profilePicture, numLikes, numPosts, numFriends) VALUES ('test5234', 'test1', 'test1', 'test1', 0, 0, 0);"
    db_aws.query(sqlInsert, (err, result) => {
        console.log("hello world");
    })
});

app.listen(3000, () => {
    console.log("running on port 3000");
});