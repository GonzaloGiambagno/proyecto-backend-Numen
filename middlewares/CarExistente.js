const Car = require('../models/cars');

const carExistente = async(marca = '', modelo = '') => {
    const existeCar = await Car.findOne({ marca, modelo })
    if (existeCar) {
        throw new Error(`El auto '${marca}, ${modelo}' ya se encuentra en la base de datos'`)
    }
}

module.exports = carExistente