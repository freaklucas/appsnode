const router = require("express").Router();

const partyController = 
    require("../controllers/PartyController");

router.route("/party").post(
    (req, res) => partyController.create(req, res));


module.exports = router;