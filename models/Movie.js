const mongoose=require('mongoose');

const MovieSchema=mongoose.Schema({
    
    titulo:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    poster_path:{
        type:Number
    },
    popularity:{
        type:Number,
        required:true
    }
})


const MovieModel=mongoose.model('movie',MovieSchema);


module.exports=MovieModel;