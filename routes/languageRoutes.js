const express = require("express");
const languageModel = require("../models/languageModel");
const router = express.Router();

router.get("/languages", async (req, res) => {
  try {
    const languages = await languageModel.find();
    res.status(200).json(languages);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
  router.post("/languages", async (req, res) => {
    try {
      const newLanguage = await languageModel.create(req.body);
      res.status(200).json(newLanguage);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  });
});
router.delete("/languages/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLanguage = await languageModel.findByIdAndDelete(id);
    res.status(200).json({ message: `La langue ${deletedLanguage} a bien été supprimé` });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
