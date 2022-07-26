const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({

        pDate : {
            type:String,
            required :true
        },
        pDestination : {
            type:String,
            required :true
        },
        pPackage : {
            type:String,
            required :true
        }
});
module.exports = mongoose.model('packages',packageSchema);