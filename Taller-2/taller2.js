function findMax(list) {
    let mayor = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i] > mayor) {
            mayor = list[i]
        }
    }
    return mayor
}

function includes(list, element) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === element) {
            return true
        }
    }
    return false
}

function sum(list) {
    let suma = 0
    for (let i = 0; i < list.length; i++) {
        suma += list[i]
    }
    return suma
}

function missingNumbers(list) {
    list.sort()
    let missing = []
    let menor = Math.min(...list) + 1
    for (let i = 0; i < list.length; i++) {
        if (!includes(list, menor)) {
            missing.push(menor)
        }
        menor++
    }
    return missing
}

const list = [3,17,-1,4,-19]
const list2 = [7,2,4,6,3,9]

console.log(findMax(list))
console.log(includes(list, 4)) 
console.log(sum(list))
console.log(missingNumbers(list2))