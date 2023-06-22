const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
  host: '192.168.56.1',
  user: 'sa',
  password: 'cat123',
  database: 'Soundbits',
});

db.getConnection((err, connection) => {
    if (err) {
      console.error('Error acquiring database connection:', err);
      return;
    }
  
    const sql = 'SELECT * FROM users';
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
    
    
        
    const sqlInsert = "INSERT INTO UserInfo (username, email, userPassword, profilePicture, numLikes, numPosts, numFriends) VALUES ('test5234', 'test1', 'test1', 'test1', 0, 0, 0);"
    db.query(sqlInsert, (err, result) => {
        console.log("hello world");
    })
});

app.listen(3000, () => {
    console.log("running on port 3000");
});