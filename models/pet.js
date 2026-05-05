const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    name: String,
    type: String, // dog, cat, etc
    service: String, // vet, grooming, training, sitting
    price: Number,
    location: String,
    date: Date
});

module.exports = mongoose.model("Pet", petSchema);