const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

// ================= SIGNUP =================
router.get("/signup", (req, res) => {
    res.render("users/signup");
});

router.post("/signup", async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        const user = new User({ username, email });
        const registeredUser = await User.register(user, password);

        req.login(registeredUser, (err) => {
            if (err) return next(err);

            req.flash("success", "Welcome to PetNest!");

            // 🔥 FIX: redirect back to intended page OR services
            const redirectUrl = req.session.redirectUrl || "/#services";
            delete req.session.redirectUrl;

            res.redirect(redirectUrl);
        });

    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
});


// ================= LOGIN =================
router.get("/login", (req, res) => {
    res.render("users/login");
});

router.post(
    "/login",
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }),
    (req, res) => {

        req.flash("success", "Welcome back!");

        // 🔥 FIX: smart redirect
        const redirectUrl = req.session.redirectUrl || "/#services";
        delete req.session.redirectUrl;

        res.redirect(redirectUrl);
    }
);


// ================= LOGOUT =================
router.get("/logout", (req, res) => {
    req.logout(() => {
        req.flash("success", "Logged out!");
        res.redirect("/#services"); // 🔥 FIXED
    });
});

module.exports = router;