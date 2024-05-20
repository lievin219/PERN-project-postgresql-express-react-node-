const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  user: "pern_project_vo7v_user",
    password: "4mUWgF0T4zE2WmyzFEQ3DLLfAdiyhvjy",
    host: "dpg-cp5gvs0cmk4c73f1vp0g-a",
    port: 5432,
    database: "pern_project_vo7v"
    // user: "postgres",
    // password: "gakiza2004",
    // host: "localhost",
    // port: 5432,
    // database: "pernproject" // Should be lowercase "database", not "DATABASE"
});
pool.connect((err, client, release) => {
    if (err) {
      console.error('Error acquiring client', err.stack);
      return;
    }
    // Use the client for database operations
  });

module.exports = pool;