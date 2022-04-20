const express = require('express');
const rota = express.Router();
const { calculadora, interacao, equipe } = require('../controller/menuController');
const { operacao } = require('../controller/operacoesController')
const { nome } = require('../controller/interacaoController');

rota.get('/', calculadora);


rota.get('/res', operacao);
rota.get('/interacao', interacao);
rota.get('/txt', nome)
rota.get('/equipe', equipe), 




module.exports = {
    routes: rota
}


