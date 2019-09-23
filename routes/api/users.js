const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router
  .route("/account/signup")
  .get(usersController.findAll)
  .post(usersController.createUser);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
