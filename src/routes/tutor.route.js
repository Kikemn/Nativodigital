const express = require('express')
const { getTutor } = require('../controller/tutor.controller')
const { addTutor, updateTutor, getTutor, deleteTutor} = require('../controller/tutor.controller')
const apiTutor = express.Router()

apiTutor.post('/tutor', addTutor)
apiTutor.get('/tutors',getTutor)
apiTutor.put('/tutor/:tutorId', updateTutor)
apiTutor.get('/tutor/:tutorId',getTutor)
apiTutor.delete('/tutor/:tutorId',deleteTutor)

module.exports = apiTutor