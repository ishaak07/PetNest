const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    service: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
        owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
        status: {
        type: String,
        enum: ["Pending", "Confirmed"],
        default: "Pending"
    }
});

module.exports = mongoose.model("Appointment", appointmentSchema);