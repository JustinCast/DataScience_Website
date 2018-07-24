'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    Username: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: true
    }
})
module.exports  = mongoose.model('user', UserSchema)