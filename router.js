const router = require("express").Router();
const catalogoController = require('./controllers/catalogoController');
const pedidoController = require('./controllers/pedidosController');

router.get('/catalogo', catalogoController.obtenerCatalogo);
router.post('/flores', catalogoController.agregarFlor);

router.post('/pedidos', pedidoController.crearPedido);


module.exports = router;