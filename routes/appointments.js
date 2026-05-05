const express = require("express");
const router = express.Router();
const Appointment = require("../models/appointment");
const isLoggedIn = require("../middleware/isLoggedIn");


// ================= GET FORM =================
router.get("/new", isLoggedIn, (req, res) => {
    const service = req.query.service;
    res.render("appointments/new", { service });
});


// ================= CREATE APPOINTMENT (FIXED BACK) =================
router.post("/", isLoggedIn, async (req, res) => {
    try {
        const { service, name, phone, date } = req.body;

        const newAppointment = new Appointment({
            service,
            name,
            phone,
            date,
            owner: req.user._id,
            status: "Pending"
        });

        await newAppointment.save();

        req.flash("success", "Appointment booked successfully!");
        res.redirect("/appointments");

    } catch (err) {
        console.log(err);
        req.flash("error", "Something went wrong!");
        res.redirect("/appointments/new");
    }
});


// ================= MY APPOINTMENTS + SEARCH =================
router.get("/", isLoggedIn, async (req, res) => {
    try {
        let { q } = req.query;

        let filter = {
            owner: req.user._id
        };

        if (q && q.trim() !== "") {
            filter.$or = [
                { service: { $regex: q, $options: "i" } },
                { name: { $regex: q, $options: "i" } }
            ];
        }

        const appointments = await Appointment.find(filter);

        res.render("appointments/index", { appointments, q });

    } catch (err) {
        console.log(err);
        req.flash("error", "Cannot load appointments");
        res.redirect("/");
    }
});


// ================= DELETE =================
router.delete("/:id", isLoggedIn, async (req, res) => {
    try {
        const { id } = req.params;

        await Appointment.findByIdAndDelete(id);

        req.flash("success", "Appointment cancelled successfully!");
        res.redirect("/appointments");

    } catch (err) {
        console.log(err);
        req.flash("error", "Could not cancel appointment");
        res.redirect("/appointments");
    }
});

module.exports = router;