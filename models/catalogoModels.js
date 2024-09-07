const mongoose = require('mongoose');

const RegisterCatalogoSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    },
    precio: {
        type: String,
        required: true,
    },
    cantidad_disponible: {
        type: String,
        required: true,
    },
    imagen_url: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Catálogo", RegisterCatalogoSchema);