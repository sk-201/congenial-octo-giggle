const express = require("express");
const router = express.Router();
const DataModel = require("../models/DataModel");
//route for fetching single Project Detail
router.get("/project/:id", async (req, res) => {
  try {
    const projectId = req.params.id;

    const project = await DataModel.findById(projectId);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
