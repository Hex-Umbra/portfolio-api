const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  nom: { type: String },
  prenom: { type: String },
  telephone: { type: String, required: true },
  email: { type: String, required: true },
  addresse: { type: String, required: true },
});

const contactModel = mongoose.model("Contacts", contactSchema);

module.exports = contactModel;
