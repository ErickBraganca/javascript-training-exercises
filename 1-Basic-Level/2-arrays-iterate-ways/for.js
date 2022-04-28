/*---------------------------------------------
Explorar a estrutura de repetição for no
parseamento de arrays
---------------------------------------------*/

const materials = [
    { Name: 'Carbon Steel', Code: 'AC' },
    { Name: 'Stainless Steel', Code: 'AI' },
    { Name: 'Suplex Steel', Code: 'AD' },
    { Name: 'Cast Iron', Code: 'CI' },
]

console.time("Time of for loop")
    for (let index = 0; index < materials.length; index++) {
        console.log(`${index}: ${materials[index].Name}`)

        //Stop loop
        //if(materials[index].Code === "AC") break
    }
console.timeEnd("Time of for loop")