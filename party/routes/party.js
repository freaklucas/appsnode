const router = require("express").Router();

const partyController = 
    require("../controllers/PartyController");

router.route("/party").post(
    (req, res) => partyController
        .create(req, res));

router.route("/party").get(
    (req, res)=> partyController
        .getAll(req, res));

router.route("/party/:id").get((req, res) => partyController
    .getUnique(req, res));

module.exports = router;