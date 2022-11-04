const express = require('express');
const router = express.Router();
// const checkIn = require('../db/queries/checkIn');
const db = require('../configs/db.config');

router.post("/", (request, response) => {
  if (process.env.TEST_ERROR) {
    setTimeout(() => response.status(500).json({}), 1000);
    return;
  }

  const {
    location,
    name,
    time,
    covid_free,
    allergies,
    medications,
    conditions,
    reason,
     } = request.body;

  console.log("BODY:", request.body);

  db.query(
    "INSERT INTO checkins (location_id, patient_name, time, covid_free, allergies, medications, conditions, visit_reason) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [location,
      name,
      time,
      covid_free,
      allergies,
      medications,
      conditions,
      reason, 
    ]
  )
    .then((rows) => {
      console.log("Successful", rows);
      response.status(204).json({});
    })
    .catch(error => console.log(error));
});

module.exports = router;