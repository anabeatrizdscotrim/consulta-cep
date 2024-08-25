const Sequelize = require('sequelize');
const config = require('../config/database'); 

const sequelize = new Sequelize(config);

const Endereco = require('../models/Endereco');

module.exports = sequelize;
