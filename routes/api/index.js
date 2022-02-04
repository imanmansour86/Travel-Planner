const router = require("express").Router();
const locationRoutes = require("./location-routes");
const travellerRoutes = require("./traveller-routes");
const tripsRoutes = require("./trips-routes");

router.use("/travellers", travellerRoutes);
router.use("/locations", locationRoutes);
router.use("/trips", tripsRoutes);

module.exports = router;
