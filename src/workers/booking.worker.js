const bookingQueue = require("../queus/booking.queue");

bookingQueue.process(async (job) => {
  console.log(`📧 Sending booking confirmation email to ${job.data.email}`);
});
