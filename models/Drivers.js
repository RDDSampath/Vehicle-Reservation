const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({

        dName : {
            type:String,
            required :true
        },
        dId : {
            type:String,
            required :true
        },
        dTime : {
            type:String,
            required :true
        },
        dCharges : {
            type:String,
            required :true
        }
});
module.exports = mongoose.model('Drivers',driverSchema);