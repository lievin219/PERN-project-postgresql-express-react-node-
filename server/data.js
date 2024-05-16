const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "gakiza2004",
    host: "localhost",
    port: 5432,
    database: "pernproject" // Should be lowercase "database", not "DATABASE"
});

module.exports = pool;