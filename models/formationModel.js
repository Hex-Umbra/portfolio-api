const mongoose = require("mongoose");

const formationSchema = mongoose.Schema({
  duree: { type: String, required: true },
  type: { type: String },
  ecole: { type: String },
  infos: { type: String },
  enCours:{type:Boolean, default:false}
});

const formationModel = mongoose.model("Formations", formationSchema);

module.exports = formationModel;
