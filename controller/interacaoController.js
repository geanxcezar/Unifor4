const nome = (req, res) => {
    let txt = req.query['txt'];

    res.send('<h1>Você digitou: ' + txt + '</h1>')
}

module.exports = {
    nome
}
