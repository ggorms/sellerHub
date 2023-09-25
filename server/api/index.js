const express = require('express');
const router = express.Router();

router.use("/sellers", require("./seller"))
router.use("/products", require("./products"))


module.exports = router;