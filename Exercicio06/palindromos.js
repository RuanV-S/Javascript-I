const palavra = prompt('Informe a palavra: ')

let palavraInvertida = ''

for (let i = palavra.length - 1; i >= 0; i--) {
    console.log(i)
    palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
    alert(
        "A palavra " + palavra + " é um palindromo!"
    )
} else {
    alert(
        "A palavra " + palavra + " não é um palindromo!\n" +
        palavra + " invertido fica " + palavraInvertida
    )
}