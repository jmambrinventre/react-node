const mongoose = require("mongoose");

const rolesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Roles', rolesSchema);