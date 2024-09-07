const Flor = require('../models/catalogoModels');
const Pedido = require('../models/pedidosModels');

exports.crearPedido = async(req, res) => {
    const { cliente_nombre, cliente_email, flores } = req.body;

    try {
        let total = 0;

        for(let item of flores){
            const flor = await Flor.findById(item.flor);
            if(!flor){
                return res.status(404).json({error: `Flor no encontrada: ${item.flor}`});
            }
            if(flor.cantidad_disponible < item.cantidad){
                return res.status(400).json({error: `No hay suficiente stock para la flor: ${flor.nombre}`});
            }

            total += flor.precio * item.cantidad;
        }

        for(let item of flores) {
            const flor = await Flor.findById(item.flor);
            flor.cantidad_disponible -= item.cantidad;
            await flor.save();
        }

        const nuevoPedido = new Pedido({
            cliente_nombre,
            cliente_email,
            flores,
            total
        });

        await nuevoPedido.save();

        res.status(201).json({
            mensaje: 'Pedido realizado con éxito',
            pedido_id: nuevoPedido._id,
            total
        });
    }catch(error){
        res.status(500).json({ error: 'Error al crear el pedido' });
    }
};