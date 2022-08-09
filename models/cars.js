const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const carshopSchema = new Schema({
    marca: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true,
        unique: true
    },
    color: {
        type: String,
        required: true
    },
    caracteristicas: {
        type: String, 
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    },
});

const Car = mongoose.model('Car', carshopSchema)
module.exports = { Car };