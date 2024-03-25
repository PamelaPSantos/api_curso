const express = require('express');
const router = express.Router();

const cursoController = require('./controllers/cursoController');

router.get('/curso', cursoController.buscarTodos);
router.get('/curso/:codigo', cursoController.buscarUm);
router.post('/curso', cursoController.inserir);
router.put('/curso/:codigo', cursoController.alterar);
router.delete('/curso/:codigo', cursoController.excluir);

module.exports = router;
