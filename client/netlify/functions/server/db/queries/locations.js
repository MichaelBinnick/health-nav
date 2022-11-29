const db = require('../../configs/db.config');

const getAllLocations = () => {
  return db.query("SELECT * FROM locations ORDER BY name ASC;").then(data => {
    return data.rows;
  });
};

const getLocationById = id => {
  return db.query("SELECT * FROM locations WHERE id = $1;", [id]).then(data => {
    return data.rows;
  });
};

const getLocationsNoRestroom = () => {
  return db.query("SELECT locations.*,departments.name AS department_name FROM locations JOIN departments ON locations.department_id = departments.id WHERE locations.id BETWEEN 1 AND 30;").then(data => {
    return data.rows;
  });

};


module.exports = { getAllLocations, getLocationById, getLocationsNoRestroom };