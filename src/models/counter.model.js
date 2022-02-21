const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CounterSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    value: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('Counter', CounterSchema)