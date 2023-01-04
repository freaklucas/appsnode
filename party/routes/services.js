const router = require("express").Router();

const serviceController = 
    require("../controllers/ServiceController");

router.route("/services")
    .post((req, res) => serviceController
    .create(req, res));


module.exports = router;