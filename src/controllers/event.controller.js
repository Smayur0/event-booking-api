const Event = require("../models/Event");
const Booking = require("../models/Booking");
const eventQueue = require("../queus/event.queue");

exports.createEvent = async (req, res) => {
  const event = await Event.create({
    ...req.body,
    availableTickets: req.body.totalTickets,
    organizer: req.user.id,
  });

  res.json(event);
};

exports.updateEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  const bookings = await Booking.find({ event: event._id }).populate(
    "customer",
  );

  await eventQueue.add({
    eventId: event._id,
    customers: bookings.map((b) => b.customer.email),
  });

  res.json(event);
};
