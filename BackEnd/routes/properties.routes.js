const auth = require("../middleware/auth.middleware");

const express = require("express");
const router = express.Router();

const {
    getAllProperties,
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty,
    getMyProperties
} = require("../controllers/properties.controller");

router.get("/", getAllProperties);
router.get("/my-properties", auth, getMyProperties);
router.get("/:id", getProperty);
router.post("/", auth, createProperty);
router.put("/:id", auth, updateProperty);
router.delete("/:id", auth, deleteProperty);

module.exports = router;