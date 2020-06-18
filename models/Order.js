const mongoose=require('mongoose');

const OrderSchema=mongoose.Schema({
    
    userId:{
        type:string,
        required:true
    },
    movieId:{
        type:String,
        required:true
    },
    rental_date:{
        type:Number
    },
    return_date:{
        type:Number,
        required:true
    },
    precio: {
        type:Number,
        required:false
    }
})


const OrderModel=mongoose.model('order',OrderSchema);


module.exports=OrderModel;