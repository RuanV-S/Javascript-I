
const fristVehicleName = prompt("Qual é o nome do primeiro veiculo")
const fristVehicleSpeed = prompt("Qual é a velocidade do primeiro veiculo")
const secondVehicleName = prompt("Qual é o nome do segundo veiculo")
const secondVehicleSpeed = prompt("Qual é a velocidade do segundo veiculo")

if (fristVehicleSpeed === secondVehicleSpeed) {
   alert(
    "Ocorreu empate os carros tem a mesma velocidade"
        )
} else if (fristVehicleSpeed > secondVehicleSpeed) {
    alert(
        "O vencedor é " +
        fristVehicleName + " Com uma velocidade " + fristVehicleSpeed 
    )
} else {
    alert(
        "O vencedor é " +
        secondVehicleName + " Com uma velocidade " + secondVehicleSpeed 
    )
}
