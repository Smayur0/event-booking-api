const Queue = require("bull");

const bookingQueue = new Queue("bookingQueue", process.env.REDIS_URL);
console.log("✅ Booking Queue Initialized", bookingQueue.name);//
module.exports = bookingQueue;
