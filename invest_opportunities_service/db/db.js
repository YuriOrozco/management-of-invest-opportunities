const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pruebadb', 'postgres', 'qwerty',{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;