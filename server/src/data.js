// const { Pool } = require("pg");

// const pool = new Pool({
  
   
//     user: "postgres",
//     password: "gakiza2004",
//     host: "localhost",
//     port: 5432,
//     database: "pernproject" // Should be lowercase "database", not "DATABASE"
// });
// pool.connect((err, client, release) => {
//     if (err) {
//       console.error('Error acquiring client', err.stack);
//       return;
//     }
//     // Use the client for database operations
//   });

// module.exports = pool;
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = pool;
