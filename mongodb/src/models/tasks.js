const mongoose = require("mongoose");

const tasksSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Tasks', tasksSchema);