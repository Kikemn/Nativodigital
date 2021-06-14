'use strict'

const e = require('express')
const tutor = require('../models/tutor')

async function addTutor(req, res) {
    const {
        name,
        phone
    } = req.body
    const tutor = Tutor({
        name,
        phone
    })

    try {
        const tutorStored = await tutor.save()
        res.status(201).send({ message: tutorStored })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

async function getTutors(req, res) {

    try {
        const tutors = await Tutor.find()
        res.status(200).send({ items: tutors })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

async function getTutor(req, res) {
    let tutorId = req.params.tutorId
    try {
        await tutor.findOne({ _id: tutorId }, (err, tutor) => {
            if (err) return res.status(500).send({ message: 'cannot get this item' })
            if (!tutor) return res.status(404).send({ message: 'item not found' })
            res.status(200).send({ message: tutor })
        })
    } catch (error) {
        throw error
    }
}

async function updateTutor(req, res) {
    let tutorId = req.params.tutorId
    let update = req.body
    try {
        await Tutor.findOneAndUpdate({ _id: tutorId }, update, (err, tutors) => {
            if (err) return res.status(500).send({ message: `cannot update this tutor ${err}` })
            res.status(200).send({ message: 'this tutor has been update' })
        })
    } catch (error) {
        throw error
    }
}

async function deleteTutor(req, res) {
    let tutorId = req.params.tutorId
    try {
        await Patient.findOneAndDelete({ _id: tutorId }, (err, tutorDeleted) => {
            if (err) return res.status(500).send({ message: 'cannot delete this tutor' })
            if (!tutorDeleted) res.status(404).send({ message: 'tutor not found' })
            res.status(200).send({ message: 'this tutor has delete', tutorDeleted })
        })
    } catch (error) {
        throw error
    }
}

module.exports = {
    addTutor,
    getTutors,
    updateTutor,
    getTutor,
    deleteTutor
}