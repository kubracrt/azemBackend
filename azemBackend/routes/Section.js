const express = require("express");
const router = express.Router();
const {
  createSection,
  getSection,
  updateSection,
  deleteSection,
  getSectionByName
} = require("../controllers/Section");

router.get("/getSection", getSection);

router.post("/createSection", createSection);

router.put("/updateSection/:id", updateSection); 

router.delete("/deleteSection/:id", deleteSection);

router.get("/section/:sectionName", getSectionByName);

module.exports = router;
