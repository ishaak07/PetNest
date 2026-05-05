const express = require("express");
const router = express.Router();
const Pet = require("../models/pet");

// INDEX - show all bookings/services
router.get("/", async (req, res) => {
    const allPets = await Pet.find({});
    res.render("pets/index", { allPets });
});

// NEW - form page
function isLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        req.flash("error", "Sorry, you are not logged in!");
        return res.redirect("/login");
    }
    next();
}

router.get("/new", isLoggedIn, (req, res) => {
    res.render("pets/new");
});

router.post("/", isLoggedIn, async (req, res) => {
    const newPet = new Pet(req.body.pet);
    await newPet.save();
    req.flash("success", "Service added successfully!");
    res.redirect("/pets");
});

// CREATE - add new booking
router.post("/", async (req, res) => {
    const newPet = new Pet(req.body.pet);
    await newPet.save();
    res.redirect("/pets");
});

module.exports = router;