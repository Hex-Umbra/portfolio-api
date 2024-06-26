const mongoose = require("mongoose");

const loisirsSchema = mongoose.Schema({
  loisir: { type: String, required: true },
  details: { type: String},
});

const loisirsModel = mongoose.model("Loisirs", loisirsSchema);

module.exports = loisirsModel;
