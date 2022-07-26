const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({

        vType : {
            type:String,
            required :true
        },
        vCharges : {
            type:String,
            required :true
        },
        vNumber : {
            type:String,
            required :true
        },
        vCondition : {
            type:String,
            required :true
        },
});
module.exports = mongoose.model('Vehicles',vehicleSchema);