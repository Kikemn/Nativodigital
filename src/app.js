const express = require('express')
const apiHospital = require('./routes/hospital.route')
const apiTutor = require('./routes/tutor.route')
const apiPatient = require('./routes/patient.route') 
const bodyParser = require('body-parser')
const morgan = require('mongoose-morgan')
const app = express()
const cors = require ('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan({
    connectionString:`mongodb://localhost:27017/store`
}))


app.use('/v2',apiHospital)
app.use('/v2',apiTutor)
app.use('/v2',apiPatient) 
module.exports = app