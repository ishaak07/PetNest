const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const dashboardRoutes = require("./routes/dashboard");

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const flash = require("connect-flash");

const User = require("./models/user");

const petRoutes = require("./routes/pets");
const authRoutes = require("./routes/auth");
const serviceRoutes = require("./routes/services");
const appointmentRoutes = require("./routes/appointments");

const app = express();
let reviews = [];

// ===================== DB CONNECTION =====================
mongoose.connect("mongodb://127.0.0.1:27017/petnest")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));


// ===================== VIEW ENGINE =====================
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/boilerplate");

// ===================== MIDDLEWARE =====================
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));


// ===================== SESSION =====================
app.use(session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: false
}));


// ===================== FLASH =====================
app.use(flash());


// ===================== PASSPORT =====================
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ===================== LOCALS (GLOBAL VARIABLES) =====================
app.use((req, res, next) => {
    res.locals.success = req.flash("success") || [];
    res.locals.error = req.flash("error") || [];
    res.locals.currUser = req.user || null;
    next();
});


// ===================== ROUTES =====================
app.use("/dashboard", dashboardRoutes);
app.use("/services", serviceRoutes);
app.use("/pets", petRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/", authRoutes);


// ===================== HOME ROUTE =====================
app.get("/", (req, res) => {
    res.render("home");
});
app.get("/privacy", (req, res) => {
    res.render("privacy");
});

app.get("/terms", (req, res) => {
    res.render("terms");
});
app.get("/how-it-works", (req, res) => {
    res.render("how");
});
app.get("/reviews", (req, res) => {
    res.render("reviews", { reviews });
});
app.post("/reviews", (req, res) => {
    const { name, message } = req.body;

    reviews.push({ name, message });

    res.redirect("/reviews");
});
// ===================== SERVER =====================
app.listen(8080, () => {
    console.log("Server running on port 8080");
});