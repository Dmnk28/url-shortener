const { nanoid } = require('nanoid');

const mongoose = require('mongoose');
const { Schema } = mongoose;


const urlSetSchema = new Schema ({
  original_url: {
    type: String, 
    required: true
  },
  short_url: {
    type: String, 
    required: true, 
    default: nanoid(5)
  }
});

module.exports = mongoose.model('UrlSet', urlSetSchema);