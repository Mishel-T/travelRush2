const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// @route  GET api/users
// @desc   Tests users route
// @access Public
// router.route("/") Matches with "/api/users"
//  router.route("/signup") would match "/api/users/signup"
router.route("/").get(usersController.testAll);

// @route  POST api/users/register
// @desc   Register users route
// @access Public
router.route("/register").post(usersController.createUser);

//@route  GET api/users/login
//@desc   Login User / Return JWT token
//@access Public
router.route("/login").get(usersController.findUser);
// router.get("/", (req, res) => {
//   res.json({ msg: "user router works, but the controller doesn't!" });
// });
//.post(usersController.createUser);

// Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.updateUser)
//   .delete(usersController.deleteUser);

module.exports = router;
