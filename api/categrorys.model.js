// business.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Categrorys = new Schema({
    name: { type: String },
}, {
    collection: 'categrorys'
});

module.exports = mongoose.model('Categrorys', Categrorys);