const db = require('../../configs/db.config');

const {
  name,
  reason,
  alergies,
  conditions,
  medications } = request.body;

const addCheckIn = () => {
  return db.query(
    "INSERT INTO checkins (id, location_id, patient_name, time, allergies, medications, conditions, visit_reason) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [name,
      reason,
      alergies,
      conditions,
      medications]).then(data => {
        return data.rows;
      });
};

module.exports = addCheckIn;