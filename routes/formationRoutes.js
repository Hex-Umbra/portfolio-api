const express = require("express");
const formationModel = require("../models/formationModel");

const router = express.Router();

router.get("/formations", async (req, res) => {
  try {
    const formations = await formationModel.find();
    res.status(200).json(formations);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});
router.get("/formations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const formation = await formationModel.findById(id);
    res.status(200).json(formation);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});
router.post("/formations", async (req, res) => {
  try {
    const newFormation = await formationModel.create(req.body);
    res.status(200).json(newFormation);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});
router.put("/formations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFormation = await formationModel.findByIdAndUpdate(
      id,
      req.body
    );
    res.status(200).json({
      message: `La compétence ${updatedFormation} a bien été mis-à-jour`,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.delete("/formations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFormation = await formationModel.findByIdAndDelete(id);
    res.status(200).json(deletedFormation);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
