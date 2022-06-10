const mongoose = require('mongoose');
const { Schema } = mongoose;


const urlSetSchema = new Schema ({
  original_url: {
    type: String, 
    required: true
  },
  short_url: {
    type: String, 
    required: true
  }
});

module.exports = mongoose.model('UrlSet', urlSetSchema);