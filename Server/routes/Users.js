const { Router } = require('express');
const router = Router();
const { User } = require("../models")


router.get("/", (req, res) => {
    res.json("Test");
})

router.post("/", async (req, res) => {
    const post = req.body;
    await User.create(post);
    res.json(post);
})

module.exports = router;