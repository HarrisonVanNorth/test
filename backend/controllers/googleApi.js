const knex = require("../db/knex.js");
const baseGooglUrl = 'https://maps.googleapis.com/maps/api/js?key=${id}&callback=initMap';

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function (req, res) {
    res.send("google");
  },
}

