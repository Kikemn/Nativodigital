'use strict'

const e = require('express')
const hospital = require('../models/Hospital')

async function addHospital(req, res) {
    const {
        nameH,
    } = req.body
    const Hospital = Hospital({
        nameH,
    })

    try {
        const hospitalStored = await hospital.save()
        res.status(201).send({ message: hospitalStored })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

async function getHospitals(req, res) {

    try {
        const hospitals = await Hospital.find()
        res.status(200).send({ items: hospitals })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

async function getHospital(req, res) {
    let hospitalId = req.params.hospitalId
    try {
        await hospital.findOne({ _id: hospitalId }, (err, hospital) => {
            if (err) return res.status(500).send({ message: 'cannot get this item' })
            if (!hospital) return res.status(404).send({ message: 'item not found' })
            res.status(200).send({ message: hospital })
        })
    } catch (error) {
        throw error
    }
}

async function updateHospital(req, res) {
    let hospitalId = req.params.hospitalId
    let update = req.body
    try {
        await Hospital.findOneAndUpdate({ _id: hospitalId }, update, (err, hospitals) => {
            if (err) return res.status(500).send({ message: `cannot update this hospital ${err}` })
            res.status(200).send({ message: 'this hospital has been update' })
        })
    } catch (error) {
        throw error
    }
}

async function deleteHospital(req, res) {
    let hospitalId = req.params.hospitalId
    try {
        await Hospital.findOneAndDelete({ _id: hospitalId }, (err, hospitalDeleted) => {
            if (err) return res.status(500).send({ message: 'cannot delete this hospital' })
            if (!hospitalDeleted) res.status(404).send({ message: 'hospital not found' })
            res.status(200).send({ message: 'this hospital has delete', hospitalDeleted })
        })
    } catch (error) {
        throw error
    }
}

module.exports = {
    addHospital,
    getHospitals,
    updateHospital,
    getHospital,
    deleteHospital
}