const { Pool } = require("pg");

const config = {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
};

const pool = new Pool(config);

module.exports = {
    query: (text, params) => pool.query(text, params),
};