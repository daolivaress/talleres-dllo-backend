function desglosarString(string, tipo) {
    const vocales = ['a', 'e', 'i', 'o', 'u']
    const letras = string.split('')
    if (tipo === 'vocales') {
        return letras.filter(letra => vocales.includes(letra)).length
    } else if (tipo === 'consonantes') {
        return letras.filter(letra => !vocales.includes(letra)).length
    }
}

function twoSum(nums, target) {
    const indices = nums.map((num, i) => {
        const index = nums.slice(i + 1).findIndex((num2) => num + num2 === target);
        return index === -1 ? -1 : i + 1 + index;
    });

    const i = indices.findIndex((index) => index !== -1);
    return [i, indices[i]];
}

function conversionRomana(string) {
    const numero_romano = string.toUpperCase()
    const numeros = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const letras = numero_romano.split('')
    return letras.reduce((acumulador, letra, index) => {
        if (numeros[letra] < numeros[letras[index + 1]]) {
            return acumulador - numeros[letra]
        } else {
            return acumulador + numeros[letra]
        }
    }, 0)
}

console.log(desglosarString('hola', 'consonantes')) // ['o', 'a']
console.log(conversionRomana('xiv')) // 4
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]