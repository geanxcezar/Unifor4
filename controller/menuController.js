const res = require("express/lib/response");

const calculadora = ( req, res ) => {
    res.render('index')   
}

const interacao = (req, res) => {
    res.render('interacao');
    
}

const equipe = (req, res) => {
    res.render('equipe')
}

module.exports = {
    calculadora,
    interacao,
    equipe
}