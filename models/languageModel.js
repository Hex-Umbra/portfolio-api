const mongoose = require("mongoose");

const languageSchema = mongoose.Schema({
  langue: { type: String, required: true },
  mastery: { type: String, required: true },
});

const languageModel = mongoose.model("Langues", languageSchema);

module.exports = languageModel;
