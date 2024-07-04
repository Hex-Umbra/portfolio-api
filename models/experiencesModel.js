const mongoose = require("mongoose");

const experiencesSchema = mongoose.Schema({
  duree: { type: String, required: true },
  mission: { type: String },
  job: { type: String },
  company:{type: String}
});

const experiencesModel = mongoose.model("Experiences", experiencesSchema);

module.exports = experiencesModel;