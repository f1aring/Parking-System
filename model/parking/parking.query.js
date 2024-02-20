
const model = require('./parking.model');

exports.getAll = async ()=>{
    try {
        const vehicles = await model.find({});
        return vehicles;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching the values from database');
    }
}

exports.postCars = async (vehicles)=>{
    try {
        const newVehicle = model.create({
            number_plate : vehicles.number_plate,
            slot: vehicles.slot
        });
        return newVehicle;
         
    } catch (err) {
        console.log(err);
        throw new Error("Error saving data into the database")
    }

}

exports.updateTime = async (id)=>{
    try {
        const checkOut = await model.findByIdAndUpdate(id, {check: Date.now(), flag: false, slot: 0}, {new: true});
        return checkOut
        
         
    } catch (err) {
        console.log(err);
        throw new Error("Error updating the time of vehicle")
    }

}

