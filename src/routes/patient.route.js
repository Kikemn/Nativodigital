const express = require('express')
const { getPatients } = require('../controller/paciente.controller')
const { addPatient, updatePatient, getPatient, deletePatient} = require('../controller/paciente.controller')
const apiPatient = express.Router()

apiPatient.post('/patient', addPatient)
apiPatient.get('/patients',getPatients)
apiPatient.put('/patient/:patientId', updatePatient)
apiPatient.get('/patient/:patientId',getPatient)
apiPatient.delete('/patient/:patientId',deletePatient)

module.exports = apiPatient