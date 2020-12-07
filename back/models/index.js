const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const PublicBoard = require('./publicBoard');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.PublicBoard = PublicBoard;

PublicBoard.init(sequelize);

//PublicBoard.associate(db);


module.exports = db;
