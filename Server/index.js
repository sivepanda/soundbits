const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

const { User } = require("./models");
const { Sound } = require("./models");


app.get('/select', (req, res) => {
  res.send('select')
});

app.get('/insert', (req, res) => {
  res.send('insert')
});

app.get('/delete', (req, res) => {
  res.send('delete')
});

// Routers
const soundRouter = require("./routes/Sounds");
app.use("/sounds", soundRouter);
// const commentsRouter = require("./routes/Comments");
// app.use("/comments", commentsRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});