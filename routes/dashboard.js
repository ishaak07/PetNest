const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Appointment = require("../models/appointment");

// Dashboard page
router.get("/", isLoggedIn, async (req, res) => {
    const userId = req.user._id;

    const appointments = await Appointment.find({ owner: userId });

    const total = appointments.length;

    const upcoming = appointments.filter(a => new Date(a.date) >= new Date()).length;

    res.render("dashboard/index", {
        appointments,
        total,
        upcoming
    });
});

module.exports = router;