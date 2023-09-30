const express = require("express");
const router = express.Router();
const DataModel = require("../models/DataModel");
//route for search
router.get("/search", async (req, res) => {
  try {
    const keyword = req.query.keyword;

    const projects = await DataModel.find({
      "Project.Technologies": { $regex: new RegExp(keyword, "i") },
    });

    res.json(projects);
  } catch (error) {
    console.error("Error searching for projects:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
