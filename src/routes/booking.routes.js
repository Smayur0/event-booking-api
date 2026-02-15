const router = require("express").Router();
const auth = require("../middlewares/auth");
const role = require("../middlewares/role");
const controller = require("../controllers/booking.controller");

router.post("/", auth, role("CUSTOMER"), controller.bookTicket);

module.exports = router;
