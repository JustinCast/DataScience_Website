'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FeedbackSchema = new Schema({
    FeedbackTitle: {
        type: String,
        required: true
    },
    FeedbackDate: {
        type: Date,
        required: true
    },
    FeedbackDescription: {
        type: String,
        required: true
    },
    Feed
})