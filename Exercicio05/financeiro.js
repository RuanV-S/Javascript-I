
let quantidadeInicial = prompt('Quantidade inicial de dinheiro');
let opcao = '3'
let carteira = parseFloat(quantidadeInicial)
do {
    opcao = prompt(
        "Seja bem-vindo ao controle financeiro\n" +
        "Seu saldo é de: " + carteira +
        "\n1. Adicionar" +
        "\n2. Remover" +
        "\n3. Sair"

    )

    switch (opcao) {
        case '1':
            let adicionar = prompt('Valor que deseja adicionar')        
            carteira = parseFloat(adicionar) + carteira
            break
        case '2':
            let remover = prompt('Valor que deseja remover')           
            carteira = carteira -  parseFloat(remover)
            break
            case '3':
            alert('Voce escolhe sair..')
            default:
                alert("Opção inválida.")
            
    }
} while (opcao !== '3')