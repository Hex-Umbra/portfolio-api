const express = require("express");
const loisirsModel = require("../models/loisirsModel");

const router = express.Router();

router.get("/loisirs", async (req, res) => {
  try {
    const loisirs = await loisirsModel.find();
    res.status(200).json(loisirs);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
  router.post("/loisirs", async (req, res) => {
    try {
      const newLoisir = await loisirsModel.create(req.body);
      res.status(200).json(newLoisir);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  });
});


module.exports = router