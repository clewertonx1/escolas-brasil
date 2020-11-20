const getEscolasByNome = require('../../service/escolas');

async function getEscolasNome(nome){

    if (nome.length !== 3) {
        return JSON.stringify({"error": "O nome deve ter no minino 3 caracteres."});
    }

    try {

        const listaDeEscolas  = await getEscolasByNome(nome);
        
        return listaDeEscolas;
    
    } catch (error) {
        return JSON.stringify({"error":"A escola nao existe"});
    }

}

module.exports = getCidadesEstado;