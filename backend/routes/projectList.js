const express = require("express");
const DataModel = require("../models/DataModel");

const router = express.Router();
//route for fetching all projects
router.get("/projects", async (req, res) => {
  try {
    const projects = await DataModel.find({});

    res.json(projects);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
