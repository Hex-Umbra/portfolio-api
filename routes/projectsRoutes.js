const express = require("express");
const projectsModel = require("../models/projectsModel");
const router = express.Router();

router.get("/projects", async (req, res) => {
  try {
    const projects = await projectsModel.find();
    res.status(200).json(projects);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});
router.get("/projects/:id", async (req, res) => {
  try {
    const {id} = req.params
    const project = await projectsModel.findById(id);
    res.status(200).json(project);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});
router.post("/projects", async (req, res) => {
  try {
    const newprojects = req.body;
    await projectsModel.create(newprojects);
    res.status(200).json(newprojects);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});


router.put("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProject = await projectsModel.findByIdAndUpdate(id, req.body);
    res
      .status(200)
      .json({ message: `La compétence ${updatedProject} a bien été mis-à-jour` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.delete("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await projectsModel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: `La compétence ${deletedProject} a bien été supprimé` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
