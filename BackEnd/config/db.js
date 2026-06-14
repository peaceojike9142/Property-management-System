const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "property_db",
    password: "Batman914!",
    port: 5432
});

module.exports = pool;