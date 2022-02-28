const Pool = require("pg").Pool;
const { Sequelize } = require('sequelize');
const connectionString= "postgres://postgres:12345@localhost:5432/postgres";
const sequelize = new Sequelize(connectionString);


sequelize.authenticate()

.then(() => {

console.log('Connection has been established successfully.');

})

.catch(err => {

console.error('Unable to connect to the database:', err);

});
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database:'postgres',
    password: 12345,
    port: 5432
}, console.log("e zaten bağlandık"));


module.exports = {

    sequelize,pool
}