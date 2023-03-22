const resultado = prompt("Escolha um resultado de 1 a 3")

resultadoNumerico = parseFloat(resultado)
switch (resultadoNumerico) {
    case 1:
        alert("O resultado é 1")
        break
    case 2:
        alert("O resultado é 2")
        break
    case 3:
        alert("O resultado é 3")
        break
    default: 
        alert('Finalizando')
}
