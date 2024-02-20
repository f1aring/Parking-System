const parking = require('../model/parking/parking.query');

exports.getVehicles = async (req, res)=>{
    try {
        const vehicles = await parking.getAll();
        res.status(200).json(vehicles);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }
}

exports.setVehcles = async (req, res)=>{
    try {
        const number_plate = req.body;
        const newCar = await parking.postCars(number_plate);
        res.status(201).json(newCar);
    } catch (error) {
        console.log(error);
    }
}
exports.vehcleTimeUpdate = async (req, res)=>{
    try {
        const {id} = req.params;
        const updatingId = await parking.updateTime(id)
        if(!updatingId){
            res.status(404).json({ error: 'Parking not found' });
        }
        else{
            res.json(updatingId)
        }
       
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }
}