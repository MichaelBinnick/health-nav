const db = require('../../configs/db.config');

const getAllLocations = () => {
	return db.query("SELECT * FROM locations;").then(data => {
		return data.rows;
	})
}

const getLocationById = id => {
	return db.query("SELECT * FROM locations; WHERE id = $1", [id]).then(data => {
		return data.rows;
	})
}



module.exports = {getAllLocations, getLocationById}