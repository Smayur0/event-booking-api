require("dotenv").config();
const connectDB = require("./src/config/db");
const app = require("./src/app");

require("./src/workers/booking.worker");
require("./src/workers/event.worker");

connectDB();

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`),
);
