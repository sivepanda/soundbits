const { Router } = require('express');
const router = Router();
const { User, Sound } = require("../models")
// const { Sound } = require("../models")


router.get("/", (req, res) => {
    res.json("Test");
})

router.get("/like/:id"), (req, res) => {
  const id = req.params.id;
  Sound.increment({numLikes: 1}, {where: {id: id} }).then((result) => {
    if(result) {
      res.json(result)
    } else {
      res.status(500).json({error: "Internal Server Error"});
    }
  })
}

router.get("/unlike/:id"), (req, res) => {
  const id = req.params.id;
  Sound.increment({numLikes: -1}, {where: {id: id} }).then((result) => {
    if(result) {
      res.json(result)
    } else {
      res.status(500).json({error: "Internal Server Error"});
    }
  })
}

  //post request for user
router.post("/", async (req, res) => {
    const post = req.body;
    if (await User.findByPk(post.userId)) {
      await Sound.create(post);
      res.json(post);
    } else {
      throw new Error('Invalid Category ID');
    }
    
})

module.exports = router;