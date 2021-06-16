'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tutorSchema = Schema({
    name: {type: String, required: true},
    phone:{type: Number, required: true},
},{
    timestamps: true
})
module.exports = mongoose.model('tutor', tutorSchema )