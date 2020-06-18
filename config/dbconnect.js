const dbconnect = () => {

    //dB connection//////////
    const mongoose = require("mongoose");
    //el contenido de uri lo proporcionareis vosotros como developers.
    const uri = "mongodb+srv://<username>:<password>@dbhive-cu5o7.mongodb.net/test?retryWrites=true&w=majority";

    mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(() => {
            console.log('Conexión a la base de datos positiva');
        })
        .catch(error => console.log('Error conectandonos a la base de datos' + error));
    ////////////////////////

}

module.exports = dbconnect;

