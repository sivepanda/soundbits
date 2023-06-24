const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors());

const db = require("./models");

const { User } = require("./models");
const { Sound } = require("./models");

app.use(bodyParser.urlencoded({extended: true}))

app.get('/select', (req, res) => {
  res.send('select')
});

app.get('/insert', (req, res) => {
  res.send('insert')
});

app.get('/delete', (req, res) => {
  res.send('delete')
});

app.post('/api/insert', (req, res) => {

  const username = req.body.username
  const email = req.body.email
  const userPassword = req.body.userPassword

  const sqlInsert = "INSERT INTO UserInfo (username, email, userPassword, profilePicture, numLikes, numPosts, numFriends) VALUES (?, ?, ?, user.jpg, 0, 0, 0);"
  db.query(sqlInsert, [username, email, userPassword], (err, result) => {
    console.log(result)
  })
});

// Routers
const soundRouter = require("./routes/Sounds");
app.use("/sounds", soundRouter);
const userRouter = require("./routes/Users");
app.use("/users", userRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});