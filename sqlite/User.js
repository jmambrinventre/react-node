const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class User extends Model {};

User.init({
  name: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'user',
  timestamps: false
})

module.exports = User;