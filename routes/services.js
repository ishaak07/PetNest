const express = require("express");
const router = express.Router();

// Vet page
router.get("/vet", (req, res) => {
    res.render("services/vet");
});

// Grooming page
router.get("/grooming", (req, res) => {
    res.render("services/grooming");
});

// Training page
router.get("/training", (req, res) => {
    res.render("services/training");
});

// Sitting page
router.get("/sitting", (req, res) => {
    res.render("services/sitting");
});

module.exports = router;