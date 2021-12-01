const express = require('express');
const router = express.Router();

const corretorControllers = require('../controllers/corretorControllers.js');

router.get('/', (req, res) =>{
    return res.json('Rota raiz encontrada - corretor!');
});

router.get('/corretor', corretorControllers.index);

router.post('/corretor', corretorControllers.store);

router.put('/corretor/:codigo', corretorControllers.update);

router.delete('/corretor/:codigo', corretorControllers.delete);

module.exports = router;