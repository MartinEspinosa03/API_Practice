const Flor = require('../models/catalogoModels');

exports.obtenerCatalogo = async(req, res) => {
    try{
        const flores = await Flor.find();
        res.status(200).json(flores);
    }catch(err){
        res.status(500).json({err: 'Error al obtener el catálogo'});
    }
};

exports.agregarFlor = async(req, res) =>{
    try {
        const {nombre, descripcion, precio, cantidad_disponible, imagen_url, categoria} = req.body;

        const nuevaFlor = new Flor({
            nombre,
            descripcion,
            precio,
            cantidad_disponible,
            imagen_url,
            categoria
        });

        await nuevaFlor.save();

        res.status(201).json(nuevaFlor);
    }catch(error){
        res.status(500).json({ mensaje: "Error al agregar la flor", error: error});
    }
};