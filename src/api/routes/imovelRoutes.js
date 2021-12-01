const express = require('express');
const router = express.Router();

const imovelControllers = require('../controllers/imovelControllers.js');

router.get('/imovel', imovelControllers.index);

router.post('/imovel', imovelControllers.store);

router.put('/imovel/:codigo', imovelControllers.update);

router.delete('/imovel/:codigo', imovelControllers.delete);

module.exports = router;