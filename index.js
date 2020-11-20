const escola = require('./src/busca-escolas')

async function aaa(){
    var teste = await escola.getEscolasByName('teste')
    console.log(await teste)
}

aaa()

module.exports = require('./src/busca-escolas')