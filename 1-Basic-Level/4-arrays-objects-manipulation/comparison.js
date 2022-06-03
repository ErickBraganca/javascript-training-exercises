/*----------------------------------------------------
Comparar e identificar retornando as diferenças entre
dois arrays de objetos.
------------------------------------------------------*/

const arrayA = [{ id: 3526 }, { id: 3586 }, { id: 3577 }];
const arrayB = [{ id: 3526 }, { id: 3576 }, { id: 3577 }, { id: 3557 }];

function checkCondition(element) {
    const isContained = arrayA.some(item => item.id === element.id);
    return !isContained;
};

function checkOccurrence() {
    const arrayC = arrayB.filter(checkCondition);
    if (arrayC.length > 0) {
        console.log("|----Itens Não Contidos no Array A----|");
        console.table(arrayC);
    } else {
        console.log("|----Não há diferenças entre os Arrays----|");
    };
};

checkOccurrence();

