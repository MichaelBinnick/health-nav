// Database connections
const { Pool, Client } = require('pg');

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT} = process.env;

// const client = new Client({
//   database: DB_DATABASE,
//   host: DB_HOST,
//   port: DB_PORT,
//   user: DB_USER,
//   password: DB_PASSWORD
// });

// client.connect().then(() => {
// 	console.log("Database connection established.")
// }).catch( e => {
// 	throw new Error(e);
// });


const pool = new Pool({
	user: DB_USER,
	host: DB_HOST,
	password: DB_PASSWORD,
	port: DB_PORT,
	database: DB_DATABASE,
  ssl: true
})

pool.connect().then(() => {
	console.log("Database connection established.")
}).catch( e => {
	throw new Error(e);
})

module.exports = pool;