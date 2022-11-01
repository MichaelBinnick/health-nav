const db = require('../../configs/db.config');

const getAllDepartments = () => {
	return db.query("SELECT * FROM departments;").then(data => {
		return data.rows;
	})
}

const getDepartmentById = id => {
	return db.query("SELECT * FROM departments; WHERE id = $1", [id]).then(data => {
		return data.rows;
	})
}

module.exports = {getAllDepartments, getDepartmentById}