const express = require('express');
const path = require('path');
const rotas = require('./rotas/appRotas')
const bodyParser = require('body-parser')
const port = 3000;

const server = express();

server.set('view engine', 'ejs');
server.use(bodyParser.urlencoded({extended: false}));

server.use(express.static(path.join(__dirname, 'public')));
server.use(rotas.routes);


server.listen(port, () => {
    console.log('Servidor rodando com sucesso na porta ' + port);
})
