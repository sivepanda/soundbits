import { Router } from 'express';
const router = Router();
const { Sound } = require("../models")


router.get("/", (req, res) => {
    res.json("Test");
})

router.post("/", async (req, res) => {
    const post = req.body;
    await Sound.create(post);
    res.json(post);
})

module.exports = router;