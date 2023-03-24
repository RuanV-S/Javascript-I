let opcao = "3"
let baralho = []


do { 
    opcao = prompt(
        "Cartas no baralho: " + baralho.length + 
        "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const novaCarta = prompt('Qual carta deseja adicionar')
            baralho.push(novaCarta)
            break;
        case "2":
            const cartaPuxada = baralho.pop()
            if (!cartaPuxada) {
                alert('Não existe mais carta para serem pegas')
            } else {
                alert('A carta puxada é: ' + cartaPuxada)

            }
            break;
        case "3":
            alert('Finalizando....')
            break
        default: 
            alert('Opção Invalida')
    }
} while (opcao !== '3')
