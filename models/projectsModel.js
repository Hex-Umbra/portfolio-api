const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String },
  technologies: [],
  link: { type: String },
  description: { type: String },
});

const projectsModel = mongoose.model("Projects", projectSchema);

module.exports = projectsModel;
