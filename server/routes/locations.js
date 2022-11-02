const express = require('express');
const router = express.Router();
const locations = require('../db/queries/locations');


/* GET locations */
router.get('/', (req, res) => {
  locations.getAllLocations().then(data => {
    console.log(data);
    res.json({locations: data});
  })
});

module.exports = router;