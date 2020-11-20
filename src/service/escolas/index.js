const axios = require('axios');

async function getEscolasByNome(nome) {
    
    const url = `http://educacao.dadosabertosbr.com/api/escolas?nome=${nome}`;
    console.log(url)
   

    try {
        return await axios.get(url);
        
    } catch (error) {
        return JSON.stringify({"erro": "Erro ao buscar escolas"});
    }
}

module.exports = getEscolasByNome;
