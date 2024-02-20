const mongoose = require('mongoose');

const ParkingSchema = new mongoose.Schema({
    number_plate : {
      type: String,
      maxLength: 7,
      require: true
    },
    check: {
      type: Date,
      default: Date.now
    },
    flag: {
      type: Boolean,
      default: true,
    },
    slot:{
        type: Number,
        default: 0
    }
})

const parking = mongoose.model('parking', ParkingSchema);
module.exports = parking;