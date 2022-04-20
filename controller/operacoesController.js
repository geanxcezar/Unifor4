
const soma = ( req, res ) => {
    let num1  = Number(req.query.num1);
    let num2  = Number(req.query.num2);
    param = req.query.operacao

    let soma = num1 + num2;

    res.send('<h1> Resultado: ' + soma + '</h1>');      
}

const sub = ( req, res ) => {
    let { num1, num2 } = req.query;
    param = req.query.operacao;

    let sub = num1 - num2;

    res.send('<h1> Resultado: ' + sub + '</h1>');

} 

const mult = ( req, res ) => {
    let { num1, num2 } = req.query;
    param = req.query.operacao;

    let mult = num1 * num2;

    res.send('<h1> Resultado: ' + mult + '</h1>');
} 

const div = ( req, res ) => {
    let { num1, num2 } = req.query;    
    param = req.query.operacao;

    let div = num1 / num2;

    res.send('<h1> Resultado: ' + div + '</h1>');
}

const operacao = (req, res) => {
    const { operacao } = req.query;
    switch (operacao) {
        case 'Somar':
            soma(req, res)
            break;
        case 'Subtrair':
            sub(req, res)
            break;
        case 'Multiplicar':
            mult(req, res)
            break;
        case 'Dividir':
            div(req, res)
            break;
        default:

    }
}

module.exports = {
    operacao
}