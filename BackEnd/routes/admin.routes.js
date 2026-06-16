const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const admin = require("../middleware/admin.middleware");

const {
    getAllUsers
} = require("../controllers/admin.controller");

router.get("/users", auth, admin, getAllUsers);

module.exports = router;