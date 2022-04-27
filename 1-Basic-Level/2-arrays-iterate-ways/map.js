/*--------------------------------
Explorar a estrutura de parseamento
map para manipular o array
---------------------------------*/

const materials = [
    { Name: 'Carbon Steel', Code: 'AC', YoungModule: 190 },
    { Name: 'Stainless Steel', Code: 'AI', YoungModule: 350 },
    { Name: 'Suplex Steel', Code: 'AD', YoungModule: 125 },
    { Name: 'Cast Iron', Code: 'CI', YoungModule: 25 },
]

const modulusConverting = value => (value.YoungModule * 1000)
const modulusConverted = materials.map(modulusConverting)

console.log(modulusConverted)
