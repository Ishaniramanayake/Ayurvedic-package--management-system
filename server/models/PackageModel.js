const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  packageName: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Package', packageSchema);
