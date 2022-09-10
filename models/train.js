const mongoose = require('mongoose');


const trainSchema =new mongoose.Schema({
    row_id: {
        type:Number, 
        required: true,
    },

	seats: {
        type:Number, 
        required: true,
    },
    book:{
        type:Number,

    }
    
     
    
    
},{timestamps:true});


 
var trainModel = mongoose.model('Coach', trainSchema);
module.exports=trainModel;