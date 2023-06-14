function exibirElemento(elemento, indice, array) {
    console.log({
        elemento, 
        indice,
        array
    })
}

const lista = ['Ruan', 'Alexandre', 'Felipe', 'Bruno', 'Guilherme']

for (let i = 0; i < lista.length; i++) { 
    exibirElemento(lista[i], i, lista)
}


lista.forEach(exibirElemento)