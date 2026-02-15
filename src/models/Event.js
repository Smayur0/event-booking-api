const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  totalTickets: Number,
  availableTickets: Number,
  organizer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Event", eventSchema);
