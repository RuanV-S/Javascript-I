
const arr = []
// push: Adiciona um elemento no final do array e devolve o novo tamanho do array
arr.push('Torta', 'Bolo')
console.log(arr)

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array
arr.unshift('Brigadeiro', 'Beijinho')
console.log(arr)

// pop: Remove um elemento no final do array e devolve o elemento removido
let arrayRemove = arr.pop()
console.log(arrayRemove)

// shift: Remove um elemento no começo do array e devolve o elemento removido
arrayRemove = arr.shift()
console.log(arrayRemove)

// includes: Verifica se um elemento está presente no array em boolean
let arrayIncludes = arr.includes('Torta')
console.log(arrayIncludes)

// indexOf: Encontra o indice que possui o lemento indicado, ou -1 caso ele não exista no array
let arrayIndexOf = arr.indexOf('Beijinho')
console.log(arrayIndexOf)

// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
let arraySlice = arr.slice(0, 2)
console.log(arraySlice)

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const outros = ["Pudim", "Tapioca"]
let arrayConcat = arr.concat(outros)
console.log(arrayConcat)

// splice deletar e adicionar novo elemento
const arraySplice = arr.splice(arr, 1, "Torta", "Não sei")
console.log(arr)
console.log(arraySplice)

// metodo for para percorrer a array
for (let i = 0; i < arrayConcat.length; i++){
    const elemento = arrayConcat[i]
    console.log(elemento + " se encontra na posição " + i)
}
