const Traveller = require("./Traveller");
const Location = require("./Location");
const Trips = require("./Trips");

Traveller.belongsToMany(Location, {
  foreignKey: "traveller_id",
  onDelete: "CASCADE",
  unique: false,
  through: Trips,
});

Location.belongsToMany(Traveller, {
  foreignKey: "location_id",
  unique: false,
  through: Trips,
});

module.exports = { Traveller, Location, Trips };
