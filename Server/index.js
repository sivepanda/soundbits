const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors());

// Require the Sequelize routers
const db = require("./models");

const { User } = require("./models");
const { Sound } = require("./models");

app.use(bodyParser.urlencoded({extended: true}))

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