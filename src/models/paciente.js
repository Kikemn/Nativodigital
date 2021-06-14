'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patientSchema = Schema({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    age:{type: Number, required: true},
    city:{type: String, required: true},
    birthdate:{type: String, required: true}
},{
    timestamps: true
})
module.exports = mongoose.model('patient', patientSchema )