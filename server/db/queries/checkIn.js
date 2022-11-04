const db = require('../../configs/db.config');

const {
  name,
  reason,
  allergies,
  conditions,
  medications,
  covid_free } = request.body;
 
const addCheckIn = () => {
  return db.query(
    "INSERT INTO checkins (id, location_id, patient_name, time, covid_free, allergies, medications, conditions, visit_reason) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
    [name,
      reason,
      allergies,
      conditions,
      medications,
      covid_free]).then(data => {
        return data.rows;
      });
};

module.exports = addCheckIn;