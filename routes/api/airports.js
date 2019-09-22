const router = require("express").Router();
const airportsController = require("../../controllers/airportsController");

// Matches with "/api/airports"
router.route("/").get(airportsController.findAll);
//.post(airportsController.create);

// Matches with "/api/airports/:id"
router.route("/:id").get(airportsController.findById);
//.put(airportsController.update)
//.delete(airportsController.remove);

module.exports = router;
