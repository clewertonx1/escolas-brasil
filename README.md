# Escolas-Brasil

### Description: 

Um module para busca informações das escolas Brasileiras baseado na api http://educacao.dadosabertosbr.com/

npm package: https://www.npmjs.com/package/escolas-brasil

### Install 

To install just run: 
> npm install escolas-brasil

### Import 

In your project import the module, that way: 
```javascript
import escolas from 'escolas-brasil'
```

### Example usage 

```javascript
import escolas from 'escolas-brasil'
async function Example(){
    var escolasComNomeFlavio = await escolas.getEscolaByName("Flavio") // Ira buscar todas as escolas que possuem o nome Flavio
    console.log(escolasComNomeFlavio)
}
Example()
```

A funçao getEscolaByName espera como parâmetro uma string com no minimo tres caracteres distintos 

Other example:

```javascript
import escolas from 'escolas-brasil'
var name = "Senador"
async function Example(){
    var escolasComNomeSenador = await escolas.getEscolaByName(name) // Ira buscar todas as escolas que possuem o nome Senador 
    console.log(escolasComNomeSenador)
}
Example()
```





