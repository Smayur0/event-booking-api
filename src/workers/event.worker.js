const eventQueue = require("../queus/event.queue");

eventQueue.process(async (job) => {
  console.log(`📢 Notifying customers about event update: ${job.data.eventId}`);
});
