require('dotenv').config();
const express = require('express');
const cors = require('cors');
const postRouter = require('./routes/postRouter.js');
const app = express();
const portServidor = 3030;
const db = require('./data/db.js');

console.log('Host:', process.env.MYSQL_ADDON_HOST);
console.log('Database:', process.env.MYSQL_ADDON_DB);
console.log('User:', process.env.MYSQL_ADDON_USER);
console.log('Password:', process.env.MYSQL_ADDON_PASSWORD);
console.log('Puerto:', process.env.MYSQL_ADDON_PORT);


app.use(cors()); // habilito el intercambio de información
app.use(express.json()); // analiza los request

app.get('/', (req, res) => {
    res.send('Estas en el home');
});  // sin modularizar

app.use('/posteos', postRouter); // modularizado

// Conexion a la base de datos
const conexionDB = async () => {
    try {
        await db.authenticate();
        console.log('Conectado Ok a la Base de datos');
    } catch (error) {
        console.log(`Hay un error y es el siguiente : ${error}`);
    }
};

app.listen(portServidor, () => {
    conexionDB();
    console.log(`Servidor Ok en el puerto ${portServidor}`);
});
