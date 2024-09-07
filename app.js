const express = require('express');
const app = express();
const router = require("./router");
const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('api', router);
app.get('/', (req, res) =>{
    res.send('Base de datos incializada');
});

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("conectado a mongoDB");
})
.catch((err) =>{
    console.log(err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});