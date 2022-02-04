const router = require("express").Router();
const { Location, Traveller, Trips } = require("../../models");

///api/travellers

router.get("/", async (req, res) => {
  try {
    const travllerr = await Traveller.findAll({
      include: [{ model: Locations }],
    });
    res.status(200).json(driverData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
