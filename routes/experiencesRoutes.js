const express = require("express");
const experiencesModel = require("../models/experiencesModel");

const router = express.Router();

router.get("/experiences", async (req, res) => {
  try {
    const experiences = await experiencesModel.find();
    res.status(200).json(experiences);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});
router.get("/experiences/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await experiencesModel.findById(id);
    res.status(200).json(experience);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

router.post("/experiences", async (req, res) => {
  try {
    const newExperience = await experiencesModel.create(req.body);
    res.status(200).json(newExperience);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

router.put("/experiences/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedExperiences = await experiencesModel.findByIdAndUpdate(
      id,
      req.body
    );
    res.status(200).json({
      message: `La compétence ${updatedExperiences} a bien été mis-à-jour`,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.delete("/experiences/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExperiences = await experiencesModel.findByIdAndDelete(id);
    res.status(200).json(deletedExperiences);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
