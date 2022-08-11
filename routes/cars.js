const express = require('express');
const router = express.Router();
const controllers = require('../controller/controller');
const { check } = require('express-validator');
const { carExistente, validarocampos } = require('../middlewares/CarExistente');

router.get('/seeCars', controllers.getCars);
router.post('/addCars', [
    check('marca').custom(carExistente,validarocampos),
    check('modelo').custom(carExistente,validarocampos)
], controllers.postCar);

router.put('/modifyCar/:id', controllers.putCar),
router.delete('/deleteCar/:id', controllers.deleteCar),

//api externa de rickanmorty, se puede probar con /rickandmorty/charter 
router.get('/rickandmorty/:name',controllers.apiExterna)

module.exports = router;
