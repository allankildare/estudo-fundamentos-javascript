const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('Exemplo 1')

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}
console.log('Exemplo 2')
for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log('Exemplo 3')
externo: // Rótulo
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim')