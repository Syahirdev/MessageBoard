const monk = require('monk');
const connectionString = 'mongodb+srv://admin:admin@todo.0kutd.mongodb.net/messageboard_db?retryWrites=true&w=majority';
const db = monk('connectionString');

module.exports = db;
