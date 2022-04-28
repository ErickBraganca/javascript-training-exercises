/*---------------------------------------------
Explorar a estrutura de repetição forEach no
parseamento de arrays
---------------------------------------------*/

const materials = [
    { Name: 'Carbon Steel', Code: 'AC' },
    { Name: 'Stainless Steel', Code: 'AI' },
    { Name: 'Suplex Steel', Code: 'AD' },
    { Name: 'Cast Iron', Code: 'CI' },
]

console.time("Time of forEach")
    materials.forEach((element, index, Array) => {
        console.log(`${index}: ${element.Name}`)
    })
console.timeEnd("Time of forEach")