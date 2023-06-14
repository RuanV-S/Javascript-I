function fatorial (num) {
    console.log('Número: ' + num)
    if (num === 0 || num === 1) { 
        return 1
    } else { 
        console.log(num + ' * !' + (num - 1))
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5))