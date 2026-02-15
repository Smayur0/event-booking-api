const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  customer: {
    type: String,
    required: true,
  },
  quantity: Number,
});

module.exports = mongoose.model("Booking", bookingSchema);
