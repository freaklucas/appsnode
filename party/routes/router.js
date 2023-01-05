const router = require("express").Router();

// Services router
const serviceRouter = require("./services");

router.use("/", serviceRouter);

const partyRouter = require("./party");
router.use("/", partyRouter);

module.exports = router;