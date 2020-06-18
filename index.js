//Sección de importacion básica

const express = require('express');
const app = express();

//Importamos los módulos (funciones del controlador)

//ahora importamos los modulos de user

const {addUser} = require('./dB/dbuser');
const {showProfile} = require('./dB/dbuser');
const {userLogin} = require('./dB/dbuser');
const {userDelete} = require('./dB/dbuser');

//ahora importamos los modulos de movies

const {searchTitle} = require('./dB/dbmovies');
const {searchId} = require('./dB/dbmovies');
const {searchAllMovies} = require('./dB/dbmovies');

//ahora importo el modulo de pedido

const {creaPedido} = require('./dB/dborders');

//Middleware
app.use(express.json());
// Configure headers & cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Aquí procederemos a conectar a la base de datos
const dbconnect = require('./config/dbconnect');

//ejecutamos la función dbconnect() y con ello estaremos conectados a la base de datos.
dbconnect();


//AHORA VIENEN LAS ACCIONES CON LOS ENDPOINTS


//ENDPOINTS DE USUARIO
app.post('/user/crear', addUser);
app.post('/user/login', userLogin);
app.get('/user/perfil', showProfile);
app.delete('/user/delete', userDelete);

//ENDPOINTS PELICULAS

app.get('/movies/titulo/:titulo', searchTitle);
//http://localhost:3000/movies/titulo/terminator

app.get('/movies/id/:id', searchId);
//http://localhost:3000/movies/id/20

app.get('/movies/all', searchAllMovies);

//ENDPOINTS DE PEDIDOS

app.post('/orders', creaPedido);

//FINALMENTE LEVANTAMOS EL SERVIDOR

//port listen
app.listen(3000, ()=> console.log('>>>SERVER ONLINE'));