/*--------------------------------
Explorar a estrutura de repetição
for-in no parseamento de arrays
---------------------------------*/

const materials = [
    { Name: 'Carbon Steel', Code: 'AC' },
    { Name: 'Stainless Steel', Code: 'AI' },
    { Name: 'Suplex Steel', Code: 'AD' },
    { Name: 'Cast Iron', Code: 'CI' },
]

console.time("Time of for in")
    for (let material in materials){
        console.log(`${material}: ${materials[material].Name}`)
    }
console.timeEnd("Time of for in")