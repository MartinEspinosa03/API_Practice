const mongoose = require("mongoose");

const PedidoSchema = mongoose.Schema({
    cliente_nombre: {
        type: String,
        required: true,
    },
    cliente_email: {
        type: String,
        required: true,
    },
    flores:[
        {
            flor: { type: mongoose.Schema.Types.ObjectId, ref: 'Flor', required: true},
            cantidad: { type: Number, required: true }
        }
    ],
    total: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date, default: Date.now
    }
});

module.exports = mongoose.model("Pedidos", PedidoSchema);