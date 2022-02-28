const database = require('mime-db');
const { hostname } = require('os');
const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'minhasenhaP01',
    hostname: 'localhost' ,
    port: 5432,
    database: 'postgres'
});

module.exports = db;