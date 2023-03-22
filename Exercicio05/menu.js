let opcao = '5'


do {
    opcao = prompt(
        "Seja Bem-vindo(a)\n" +
        "\nEscolha uma das opções abaixo:\n" +
        "1. Opção Um" +
        "\n2. Opção Dois" +
        "\n3. Opção Três" +
        "\n4. Opção Quatro" +
        "\n5. Encerrar"

    )

    switch (opcao) {
        case '1':
            alert("Voce escolheu a opção " + opcao)
            break
        case '2':
            alert("Voce escolheu a opção " + opcao)
            break
        case '3':
            alert("Voce escolheu a opção " + opcao)
            break
        case '4':
            alert("Voce escolheu a opção " + opcao)
            break
            
        case '5':
            alert("Voce escolhe encerrar...")
        default:
            alert("Opção inválida.")
        }
} while (opcao !== '5')