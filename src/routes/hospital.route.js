const express = require('express')
const { getHospitals } = require('../controller/hospital.controller')
const { addHospital, updateHospital, getHospital, deleteHospital} = require('../controller/hospital.controller')
const apiHospital = express.Router()

apiHospital.post('/hospital', addHospital)
apiHospital.get('/hospitals',getHospitals)
apiHospital.put('/hospital/:hospitalId', updateHospital)
apiHospital.get('/hospital/:hospitalId',getHospital)
apiHospital.delete('/hospital/:hospitalId',deleteHospital)

module.exports = apiHospital