const express = require("express");
const competencesModel = require("../models/skillsModel");
const router = express.Router();

router.get("/competences", async (req, res) => {
  try {
    const competences = await competencesModel.find();
    res.status(200).json(competences);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});
router.get("/competences/:id", async (req, res) => {
  try {
    const {id} = req.params
    const competence = await competencesModel.findById(id);
    res.status(200).json(competence);
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


router.put("/competences/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSkill = await competencesModel.findByIdAndUpdate(id, req.body);
    res
      .status(200)
      .json({ message: `La compétence ${updatedSkill} a bien été mis-à-jour` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.delete("/competences/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSkill = await competencesModel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: `La compétence ${deletedSkill} a bien été supprimé` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
