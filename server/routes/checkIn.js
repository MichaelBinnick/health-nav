const express = require('express');
const router = express.Router();
// const checkIn = require('../db/queries/checkIn');

router.post("/checkin", (request, response) => {
  if (process.env.TEST_ERROR) {
    setTimeout(() => response.status(500).json({}), 1000);
    return;
  }

  const {
    name,
    time,
    location,
    reason,
    alergies,
    conditions,
    medications } = request.body;

console.log("BODY:", request.body)

  db.query(
    "INSERT INTO checkins (id, location_id, patient_name, time, allergies, medications, conditions, visit_reason) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [name,
      time,
      reason, 
      location,
      alergies,
      conditions,
      medications]
      )
    .then(() => {
      setTimeout(() => {
        response.status(204).json({});

      }, 1000);
    })
    .catch(error => console.log(error));
});

module.exports = router;