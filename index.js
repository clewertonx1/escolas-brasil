const escola = require('./src/busca-escolas')



async function aaa(){
    var teste = await escola.getEscolasByName('comp')
    console.log(await teste)
}

aaa(
)
