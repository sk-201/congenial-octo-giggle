const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  Project: {
    Title: String,
    Technologies: String,
  },
  Technical_Skillset: {
    Frontend: String,
    Backend: String,
    Databases: String,
    Infrastructre: String,
  },
  Other_Information: {
    Availability: String,
  },
});

module.exports = mongoose.model("Data", dataSchema);
