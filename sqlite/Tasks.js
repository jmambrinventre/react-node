const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Tasks extends Model {};

Tasks.init({
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'task',
  timestamps: false
})

module.exports = Tasks;