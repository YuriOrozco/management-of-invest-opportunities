const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Investment = new sequelize.define('Investment', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 40000,
      max: 600000,
    },
  },
});

module.exports = Investment;