
let opcao = '3'
let pacientes = []

do {
    opcao = prompt( 
        '\n1 - Novo Paciente' +
        '\n2 - Consultar Paciente' +
        '\n3 - Sair' +
        '\n\nPacientes: \n' + pacientes
    )
    console.log(pacientes)
    switch (opcao) { 
        case '1': 
            let newPaciente = prompt('Nome do paciente:')
            pacientes.push(newPaciente + "\n")
            break;
        case '2':
            let pacienteAtendido = pacientes.shift()
            if (!pacienteAtendido) {
                alert('Não a pacientes para serem atendidos')
            } else { 
            alert('Proximo paciente: ' + pacienteAtendido)
            }
            break;
        case '3':
            alert('Finalizando...')
            break;
        default:
            alert('Opção invalida.')
    }

} while (opcao !== '3')