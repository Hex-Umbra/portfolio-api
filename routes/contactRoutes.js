const express = require("express");
const contactModel = require("../models/contactsModel.js");
const router = express.Router();

router.get("/contact", async (req, res) => {
  try {
    const contact = await contactModel.find();
    res.status(200).json(contact);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});
router.post("/contact", async (req, res) => {
  try {
    const newContact = req.body;
    await contactModel.deleteOne();
    await contactModel.create(newContact);
    res.status(200).json(newContact);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
