const router = require("express").Router();
const userRoutes = require("./users");
const airportRoutes = require("./airports");

// User routes
router.use("/users", userRoutes);

module.exports = router;

// const router = require("express").Router();
// const airportRoutes = require("./airports");

// // Airport routes
// router.use("/airports", airportRoutes);

// module.exports = router;
