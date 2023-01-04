const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Roles extends Model {};

Roles.init({
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'rol',
  timestamps: false
})

module.exports = Roles;