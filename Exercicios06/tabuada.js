let numeroTabuada = prompt('Digite um numero de 1 a 20 para saber a taboada')

let resultado = ""
for (let i = 1; i <= 20; i++) {    
   resultado += numeroTabuada * i + '\n'
  
}

alert(resultado)