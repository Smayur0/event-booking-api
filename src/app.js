const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/events", require("./routes/event.routes"));
app.use("/api/bookings", require("./routes/booking.routes"));

module.exports = app;
