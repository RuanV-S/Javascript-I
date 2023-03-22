

let primeiroNome = prompt("Qual é o seu primeiro nome")
let sobreNome = prompt("Qual é o seu sobrenome")
let campoDeEstudo =prompt("Qual é o seu campo de estudo")
let idadeUsuario = prompt("Qual é o seu ano de nascimento")

const calculandoIdade = 2022 - idadeUsuario

alert(
    "Recruta cadatrado com sucesso!\n" + 
    "Nome completo: " + primeiroNome + " " + sobreNome + "\n" +
    "Campo de estudo: " + campoDeEstudo + "\n" +
    "Idade: " + calculandoIdade + " " + "Anos" 
    
)