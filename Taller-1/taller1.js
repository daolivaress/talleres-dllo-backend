//Punto #!
function convertidorTemp(temp) {
    const tempF = temp * (9 / 5) + 32
    return tempF
}

const tempC = 25
const tempF = convertidorTemp(tempC)
console.log(`La temperatura en Fahrenheit es: ${tempF}`)

//Punto #2
function resolvedor(a, b, c, tipo) {
    const resultado_positivo = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
    const resultado_negativo = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
    if (tipo == 'positivo') {
        return resultado_positivo
    } else if (tipo == 'negativo') {
        return resultado_negativo
    } else {
        return 'Tipo no valido'
    }
}

console.log(resolvedor(1, 5, 4, 'negativo'))

//Punto 3
function mejorParidad(numero) {
    return !(numero % 2)
}

const numero = 4
console.log(mejorParidad(numero))

//Punto 4
function peorParidad(numero) {
    const numeros = [0,1,2,3,4,5,6,7,8,9,10]
    if (numero == numeros[0] || numero == numeros[2] || numero == numeros[4] || numero == numeros[6] || numero == numeros[8] || numero == numeros[10]) {
        return true
    }else{
        return false
    }
}

const numero2 = 5
console.log(peorParidad(numero2))
