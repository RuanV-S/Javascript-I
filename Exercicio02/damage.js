

const fristPersonName = prompt('Nome de um Personagem')
const fristPersonPowerAttack = prompt('Quantos poder de ataque tem seu personagem')

const secondPersonName = prompt('Nome do segundo personagem')
const secondPersonLife = prompt("Quantos de vida tem esse personagem")
const secondPersonDefense = prompt("Quantos pontos de defesa tem o personagem")
const secondPersonShield = prompt("Seu personagem tem escudo (sim/não)")


if (secondPersonShield == 'não') {
    if (fristPersonPowerAttack > secondPersonDefense) {
        let damageActual  = fristPersonPowerAttack - secondPersonDefense
        alert(
            fristPersonName + "\n Ataque: " + fristPersonPowerAttack + "\n\n" + 
            secondPersonName + "\n Vida: " + secondPersonLife + "\n Defesa: " + secondPersonDefense + "\n Escudo: " + secondPersonShield + 
            "O " + fristPersonName + " causar um dano de " + damageActual + " por ataque em " + secondPersonName

        )
    }
} else if (secondPersonShield == 'sim') {
    let damageWhitShield = fristPersonPowerAttack / 2
    let damageActual = damageWhitShield - secondPersonShield 
    if (damageActual > secondPersonDefense) {
        alert(
            fristPersonName + "\n Ataque: " + fristPersonPowerAttack + "\n\n" + 
            secondPersonName + "\n Vida: " + secondPersonLife + "\n Defesa: " + secondPersonDefense + "\n Escudo: " + secondPersonShield + 
            "\n\n O " + fristPersonName + " causar um dano de " + damageActual + " pontos em " + secondPersonName

        )
    } else {
        alert(
            fristPersonName + "\n Ataque: " + fristPersonPowerAttack + "\n\n" + 
            secondPersonName + "\n Vida: " + secondPersonLife + "\n Defesa: " + secondPersonDefense + "\n Escudo: " + secondPersonShield + 
            "O " + fristPersonName + " não consegue causar dano em " + secondPersonName

        )
    }
} else {
    alert("Você não digitou corretamente o se seu personagem tem escudo, faça novamente")
}



