const { Router } = require('express');
const router = Router();
const { Sound } = require("../models")


router.get("/", (req, res) => {
    res.json("Test");
})

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
    await Sound.create(post);
    res.json(post);
})

module.exports = router;