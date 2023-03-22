const nomeDoTurista = prompt('Qual é o seu nome')
let perguntaVisita = prompt('Voce ja visitou alguma cidade (sim/não)')
let cidades = ""
let contagem = 0


while (perguntaVisita === 'sim') {
   let cidade = prompt('Qual é o nome da cidade visitada?')
   cidades += " - " + cidade + "\n"
   contagem++;

    perguntaVisita = prompt('Voce ja visitou alguma outra cidade? (sim/não)')
}

alert(
    "Turista: " + nomeDoTurista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)