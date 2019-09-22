const router = require("express").Router();
const airportRoutes = require("./airports");

// Airport routes
router.use("/airports", airportRoutes);

module.exports = router;
