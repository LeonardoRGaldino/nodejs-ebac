
const veiculo1 = {

modelo: "Palio",
ano: 2000,
placa: "DVJ-2588",
}

const veiculo2 = {
    
    modelo: "Supra",
    ano: 2000,
    placa: "JHV-4546",
    }
    


const veiculo3 = {
modelo: "Clio",
ano: 2000,
placa: "ABC-123"

}

const listCarros = [veiculo1, veiculo2, veiculo3]

const veiculo4 = {
    modelo: "t-cross",
    ano: 2022,
    placa: "DFC3R43"
}


listCarros.push(veiculo4)
listCarros.sort((a, b) => (a.modelo > b.modelo) ? 1: -1)


//console.log(listCarros)

module.exports = {listCarros: listCarros}


//console.log(listCarros.length)


// Navega entre os caracteres: 

//let Controdizio = 0
//console.log(listCarros[Controdizio].placa.substring(listCarros[Controdizio].placa.length-2))


// console.log(listCarros)

// retorna só o valor: console.log(Object.values(veiculo4))

// retorna a listagem por chave e valor: console.log(Object.entries(listCarros)) ;