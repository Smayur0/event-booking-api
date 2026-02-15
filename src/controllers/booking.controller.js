const Booking = require("../models/Booking");
const Event = require("../models/Event");
const bookingQueue = require("../queus/booking.queue");

exports.bookTicket = async (req, res) => {
  const event = await Event.findById(req.body.eventId);

  if (event.availableTickets < req.body.quantity)
    return res.status(400).json({ message: "Not enough tickets" });

  event.availableTickets -= req.body.quantity;
  await event.save();

  const booking = await Booking.create({
    event: event._id,
    customer: req.user.id,
    quantity: req.body.quantity,
  });

  await bookingQueue.add({
    email: req.user.email,
  });

  res.json(booking);
};
