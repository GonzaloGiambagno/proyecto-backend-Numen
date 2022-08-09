const express = require('express');
const router = express.Router();
const controllers = require('../controller/controller');
const { check } = require('express-validator');
const { carExistente, validarocampos } = require('../middlewares/CarExistente');

router.get('/seeCars', controllers.getCars);
router.post('/addCars', [
    check('marca').custom(carExistente,validarocampos),
    check('modelo').custom(carExistente,validarocampos)
], controllers.getCars);

router.put('/modifyCars/:id', controllers.putCar),
router.delete('/deleteCars/:id', controllers.deleteCar),



module.exports = router;
