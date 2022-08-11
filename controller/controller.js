const { Car } = require("../models/cars")
const axios = require('axios');


const controllers = {    
    myIndex (req, res) {
        res.render('index', { title: 'Proyecto back end' });
    },

    postCar: async (req, res) => {

        const { marca, modelo, color, caracteristicas, precio } = req.body;
    
        const car = new Car({ marca, modelo, color, caracteristicas, precio })
    
        await car.save()
    
        res.status(200).json(car)
    },

    getCars: async(req, res) => {
        const parametros = { estado: true }
        const [total, cars] = await Promise.all([
            Car.countDocuments(parametros),
            Car.find(parametros)
        ])
        res.status(200).json({
            total,
            cars
        })
    },

    putCar: async (req, res) => {
        const { id } = req.params
        const body = req.body
        const car = await Car.findByIdAndUpdate(id, body);
        res.json(car)
    },
    
    deleteCar: async(req, res) => {
        const { id } = req.params;
        const car = await Car.findByIdAndUpdate(id)
    
        res.status(200).json({
            msg: 'Producto dado de baja',
            car
        })
    },

    apiExterna: async (req, res) => {
        try {
            const respuesta = await axios.get("https://rickandmortyapi.com/api/"+req.params.name)
            res.json({status:respuesta.status,data:respuesta.data});
            console.log("Funciona!");
        } catch (error) {
            res.json({status:error.response.status,data:error.response.data})
        }
    }

}

module.exports = controllers