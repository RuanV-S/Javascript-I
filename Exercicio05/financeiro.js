
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
    }
} while (opcao !== '3')