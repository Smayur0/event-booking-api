const router = require("express").Router();
const auth = require("../middlewares/auth.js");
const role = require("../middlewares/role.js");
const controller = require("../controllers/event.controller");

router.post("/", auth, role("ORGANIZER"), controller.createEvent);
router.put("/:id", auth, role("ORGANIZER"), controller.updateEvent);

module.exports = router;
