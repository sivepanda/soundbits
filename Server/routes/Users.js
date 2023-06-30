const { Router } = require('express');
const router = Router();
const { User } = require("../models") // user SQL table model

// generic GET request
router.get("/", async (req, res) => {
    const get = req.body.User;
    await User.findAll(get);
    res.json(get);
});

//sets the profile picture link to :pfpLink for user :userId
router.post("/changePfp/:pfpLink/:userId", async (req, res) => {
  try {
    const profilePictureLink = req.params.pfpLink;
    const userId = req.params.userId;
    const user = await User.findByPk(userId);

    if (user) {
      user.profilePicture = profilePictureLink;
      await user.save();

      console.log('Profile picture updated successfully.');
    } else {
      console.log('User not found.');
    }
  } catch (error) {
    console.error('Error updating profile picture:', error);
  }
})

//Gets locale of :username in the db
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

//Gets locale of :username in the db
router.get("/:id/getUsrInfo", async (req, res) => {
    const id = req.params.id;
    
    User.findByPk(id).then((result) => {
        if (result) {
          res.json(result.body);
        } else {
          res.status(404).json({ error: 'Record not found' });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Internal server error' });
      });
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
