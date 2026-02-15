const Queue = require("bull");

const eventQueue = new Queue("eventQueue", process.env.REDIS_URL);

module.exports = eventQueue;
