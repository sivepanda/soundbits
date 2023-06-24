const { Router } = require('express');
const router = Router();
const { User } = require("../models")


router.get("/", async (req, res) => {
    const get = req.body.User;
    await User.findAll(get);
    res.json(get);
})

router.post("/", async (req, res) => {
    const post = req.body;
    await User.create(post);
    res.json(post);
})

module.exports = router;