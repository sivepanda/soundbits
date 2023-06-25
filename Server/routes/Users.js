const { Router } = require('express');
const router = Router();
const { User } = require("../models")


router.get("/", async (req, res) => {
    const get = req.body.User;
    await User.findAll(get);
    res.json(get);
})

router.get("/getId/:username", async (req, res) => {
    const Username = req.params.username;
    const findUserIdByUsername = async (username) => {
        try {
          const user = await User.findOne({ where: { username } });
          if (username) {
            console.log(user.id);
            return user.id;
            // const userId = user.id; // Assuming 'id' is the primary key column name
            // console.log(`User ID for ${username}: ${userId}`);
            // return userId;
          } else {
            console.log(`User ${username} not found`);
          }
        } catch (error) {
          console.error('Error finding user:', error);
        }
      };

      res.json(await findUserIdByUsername(Username));
});



router.get('/:id/:attribute', (req, res) => {
    const id = req.params.id;
    const attribute = req.params.attribute;
  
    User.findByPk(id, {
      attributes: [attribute] // Pass the attribute dynamically
    })
      .then((result) => {
        if (result) {
          res.json(result);
        } else {
          res.status(404).json({ error: 'Record not found' });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Internal server error' });
      });
  });

router.post("/", async (req, res) => {
    const post = req.body;
    await User.create(post);
    res.json(post);
})

module.exports = router;
