let express = require("express");

let userRoutes = require("./user");
let inventoryRoutes = require("./inventory");

let router = express.Router();

router.use("/user", userRoutes);
router.use("/inventory", inventoryRoutes);

module.exports = router;
