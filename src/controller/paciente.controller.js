'use strict'

const e = require('express')
const patient = require('../models/patient')

async function addPatient(req, res) {
    const {
        name,
        age,
        gender,
        city,
        birthdate
    } = req.body
    const patient = Patient({
        name,
        age,
        gender,
        city,
        birthdate
    })

    try {
        const patientStored = await patient.save()
        res.status(201).send({ message: patientStored })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

async function getPatients(req, res) {

    try {
        const patients = await Patient.find()
        res.status(200).send({ items: patients })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

async function getPatient(req, res) {
    let patientId = req.params.patientId
    try {
        await patient.findOne({ _id: patientId }, (err, patient) => {
            if (err) return res.status(500).send({ message: 'cannot get this item' })
            if (!patient) return res.status(404).send({ message: 'item not found' })
            res.status(200).send({ message: pratient })
        })
    } catch (error) {
        throw error
    }
}

async function updatePatient(req, res) {
    let patientId = req.params.patientId
    let update = req.body
    try {
        await Patient.findOneAndUpdate({ _id: patientId }, update, (err, patients) => {
            if (err) return res.status(500).send({ message: `cannot update this patient ${err}` })
            res.status(200).send({ message: 'this patient has been update' })
        })
    } catch (error) {
        throw error
    }
}

async function deletePatient(req, res) {
    let patientId = req.params.patientId
    try {
        await Patient.findOneAndDelete({ _id: patientId }, (err, patientDeleted) => {
            if (err) return res.status(500).send({ message: 'cannot delete this patient' })
            if (!patientDeleted) res.status(404).send({ message: 'patient not found' })
            res.status(200).send({ message: 'this patient has delete', patientDeleted })
        })
    } catch (error) {
        throw error
    }
}

module.exports = {
    addPatient,
    getPatients,
    updatePatient,
    getPatient,
    deletePatient
}