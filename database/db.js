const mongoose = require('mongoose');
require('dotenv').config();


const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Conexión exitosa')
    } catch {
        console.log('Error de conexión con la base de datos');
    }
}

module.exports = { dbConnection }