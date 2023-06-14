const vagas = []


function listarVagas() {
    const vagasTexto = vagas.reduce(function (textoFinal, vaga ,indice) {
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"

        return textoFinal
    }, "")
    alert(vagasTexto)
}

function novaVaga() {
    const nome = prompt("Infome um nome para essa vaga:")
    const descricao = prompt("Informe uma descrição para a vaga: ")
    const dataLimite = prompt("Informe a data limite para inscrição na vaga (dd/mm/aaaa): ")

    const confirmar = confirm(
        "Deseja criar uma nova vaga com as informações:\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )

    if (confirmar) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
    }
}


function visualizarVaga() {
    const indice = prompt('Informe o índice da vaga:')
    const vaga = vagas[indice]

    if (indice >= vagas.length || indice < 0) {
        alert('Índice invalido')
        return
    }
    const candidatosTexto = vagas.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga " + indice +
        "\nNome: " + vaga.nome +
        "\nDecrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos incritos: " + candidatosTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt('Informe o nome do(a) candidato(a)')
    const indice = prompt('Informe o índice da vaga que deseja se increver.')
    if (indice >= vagas.length || indice < 0) {
        alert('Índice invalido, vaga não encontrada.')
        return
    }
    const vaga = vagas[indice]
    const confirmar = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
    )

    if (confirmar) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]
    if (indice >= vagas.length || indice < 0) {
        alert('Índice invalido, vaga não encontrada.')
        return
    }
    const confirmar = confirm(
        "Tem certeza que desejha excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
        
    )

    if (confirmar) {
        vagas.splice(indice, 1)
        alert("Vaga excluída")
    }
}
do {
    opcao = prompt(
        'Sistema de vagas de emprego\n\n' +
        '\n1. Listar vagas disponíveis.' +
        '\n2. Criar uma nova vaga.' +
        '\n3. Visualizar uma vaga' +
        '\n4. Inscrever um candidato em uma vaga' +
        '\n5. Excluir uma vaga' +
        '\n6. Sair'
    )

    switch (opcao) {
        case "1":
           listarVagas()
            break
        case "2":
            novaVaga()
            break
        case "3":
        visualizarVaga()
            break;
        case "4":
        inscreverCandidato()
            break;
        case "5":
        excluirVaga()
            break;
        case '6':
            alert('Finalizando o programa.')
            break;
        default:
            alert('Opção Invalida')

    }
} while (opcao !== "6")