const mongoose = require("mongoose");

const competencesSchema = new mongoose.Schema({
  technologie: { type: String, required: true },
  img:{type:String},
  mastery:{type:String}
});

const competencesModel = mongoose.model("Competences", competencesSchema);

module.exports = competencesModel;
