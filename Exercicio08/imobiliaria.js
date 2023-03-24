let opcao = "3"
let imoveis = []
do {
    opcao = prompt(
        'Sistema de cadastro de imoveis\n' +
        imoveis.length + ' cadastrados.\n\n' +
        '\n1. Adicionar imovel' +
        '\n2. Lista de Imoveis' +
        '\n3. Sair'
    )
    switch (opcao) {
        case '1':
            let imovel = {}
            imovel.nomeDoProprietario = prompt('Nome do proprietario')
            imovel.qntQuartos = prompt('Quantidade de quartos')
            imovel.qntBanheiro = prompt('Quantidade de banheiros')
            imovel.isGaragem = prompt('Possui garagem? (sim/não)')
            const confirmar = confirm(
                'Deseja salvar essas informações?\n\n' +
                'Proprietario: ' + imovel.nomeDoProprietario + '\n' +
                'Quartos: ' + imovel.qntQuartos + '\n' +
                'Banheiros: ' + imovel.qntBanheiro + '\n' +
                'Tem garagem: ' + imovel.isGaragem
            )
            if (confirmar) {
                imoveis.push(imovel)
            } else {
                alert('Voltando ao menu')
            }
            break;
        case '2':           
           
            for (let i = 0; i < imoveis.length; i++) {
                alert('Imovel ' + (i + 1) + 
                    '\nProprietario: ' + imoveis[i].nomeDoProprietario +
                    '\nQuartos: ' + imoveis[i].qntQuartos +
                    '\nBanheiros: ' + imoveis[i].qntBanheiro +
                    '\nTem garagem: ' + imoveis[i].isGaragem
                )
            }
            break;
        case '3':
            alert('Finalizando programa')
            break;
        default:
            alert('Opção Invalida')
    }

} while (opcao !== '3')