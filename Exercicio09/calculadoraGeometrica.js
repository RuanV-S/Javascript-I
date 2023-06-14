
function areaTriangulo() {
    const base = prompt("O tamanho da base")
    const altura = prompt("O tamanho da altura")
    return alert(base * altura / 2)
}

function areaRetangulo() {
    const base = prompt("O tamanho da base")
    const altura = prompt("O tamanho da altura")
    return alert(base * altura)
}

function areaQuadrado() {
    const lado = prompt("O tamanho do lado")
    return alert(lado * lado)
}

function areaTrapezio() {
    const baseMenor = prompt("O tamanho da base menor")
    const baseMaior = prompt("O tamanho da base maior")
    const altura = prompt("O tamanho da altura")
    return alert((baseMenor + baseMaior) * altura / 2)
}

function areaCirculo() {
    const raio = prompt("O tamanho do raio")
    return alert(3.14 * (raio * raio))
}

let opcao = "6"

do {
    opcao = prompt(
        'Calculadora Geometrica\n\n' +
        '\n1. Calcular areá do Triangulo.' + 
        '\n2. Calcular areá do Retangulo' +
        '\n3. Calcular areá do Quadrado' +
        '\n4. Calcular areá do Trapezio' +
        '\n5. Calcular areá do Circulo' +
        '\n6. Sair do programa'
    )

    switch (opcao) {
        case "1":
            areaTriangulo()
            break
        case "2":
            areaRetangulo()
            break
        case "3":
            areaQuadrado()
            break;
        case "4":
            areaTrapezio()
            break;
        case "5":
            areaCirculo()
            break;
        case '6':
            alert('Finalizando o programa.')
            break;
        default:
            alert('Opção Invalida')

    }
} while (opcao !== "6")