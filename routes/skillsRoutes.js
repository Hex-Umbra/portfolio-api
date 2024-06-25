const express = require("express");
const competencesModel = require("../models/skillsModel");
const router = express.Router();

router.get("/competences", async (req, res) => {
  try {
    const competences = await competencesModel.find()
    res.status(200).json(competences);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});
router.post("/competences", async (req, res) => {
  try {
    const newCompetences = req.body;
    await competencesModel.create(newCompetences);
    res.status(200).json(newCompetences);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
