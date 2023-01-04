const router = require("express").Router();

const serviceController = 
    require("../controllers/ServiceController");

router.route("/services")
    .post((req, res) => serviceController
    .create(req, res));

router.route("/services")
    .get((req, res) => serviceController
        .getAll(req, res));

router.route("/services/:id")
    .get((req, res) => serviceController
    .getUnique(req, res));

router.route("/services/:id")
    .delete((req, res) => 
        serviceController
        .delete(req, res));

module.exports = router;