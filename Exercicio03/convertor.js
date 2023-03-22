const valueMeters = prompt("Digite um valor em metros")
const unitOfMeasure = prompt('Digite qual unidade de medida quer transformar (mm/cm/dm/dam/hm/km')

switch (unitOfMeasure) {
    case 'mm':
        alert('O valor de ' + valueMeters + " em milímetros é " + valueMeters / 1000)
        break
    case 'cm':
        alert('O valor de ' + valueMeters + " em centímetros é " + valueMeters / 100)
        break
    case 'dm':
        alert('O valor de ' + valueMeters + " em Decímetros é " + valueMeters / 10)
        break
    case 'dam':
        alert('O valor de ' + valueMeters + " em Decâmetro é " + valueMeters / 0.1)
        break
    case 'hm':
        alert('O valor de ' + valueMeters + " em Hectômetro é " + valueMeters / 0.01)
        break
    case 'km':
        alert('O valor de ' + valueMeters + " em Quilômetro é " + valueMeters / 0.001)
        break
    default:
        alert('Opção inválida.')


}