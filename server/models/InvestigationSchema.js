'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InvestigationSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Members: {
        type: Array,
        required: true
    },
    StartDate: {
        type: Date,
        required: true
    },
    FinishDate: {
        type: Date,
        required: false
    }
})
module.exports  = mongoose.model('investigation', InvestigationSchema)