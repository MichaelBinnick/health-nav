// Database connections
const { Pool } = require('pg');

// const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT} = process.env;

const pool = new Pool({
	user: MichaelBinnick,
	host: db.bit.io,
	password: v2_3vdjq_j7w4Cb3QNmH9GWrhpbMbp5f,
	port: 5432,
	database: MichaelBinnick/health-nav,
})

pool.connect().then(() => {
	console.log("Database connection established.")
}).catch( e => {
	throw new Error(e);
})

module.exports = pool;