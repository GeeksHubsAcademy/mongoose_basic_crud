
//PRIMERO IMPORTACIONES
const MovieModel =require('../models/Movie');
const mongoose =require('mongoose');

//SEGUNDO FUNCIONES

const searchTitle = (req,res) => {

}

const searchId = (req,res) => {

    const idTraido = req.params.id;

    //EN MONGOOSE, PROCEDEMOS A HACER LA ACCIÓN EN BASE AL MODELO
    MovieModel.find({id: idTraido})
    .then( movies=>{
        res.send(movies);

    })

    .catch (error =>
        console.error(error),
        res.status(500)
    )
}

const searchAllMovies = (req,res) => {
    
    //EN MONGOOSE, PROCEDEMOS A HACER LA ACCIÓN EN BASE AL MODELO
    MovieModel.find({}).limit(20)
    .then( movies=>{
        res.send(movies);

    })

    .catch (error =>
        console.error(error),
        res.status(500)
    )
}

//FINALMENTE EXPORTACIONES

module.exports = {
    searchTitle,
    searchId,
    searchAllMovies
}