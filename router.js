const router = require('express').Router();
const controller = require('./controller/parking.controller');

router.get('/parking', controller.getVehicles);
router.post('/parking', controller.setVehcles);
router.put('/parking/:id', controller.vehcleTimeUpdate);

module.exports = router;