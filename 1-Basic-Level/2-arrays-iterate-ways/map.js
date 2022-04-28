/*--------------------------------
Explorar o map na iteração em arrays
retornando as operações  de uma
lista de entradas e saídas
---------------------------------*/

const transactions = [
    { name: 'NoteBook', id: 0001, value: -4300 },
    { name: 'Keyboard', id: 0002, value: -350 },
    { name: 'Salary', id: 0003, value: 8500 },
    { name: 'Monitor', id: 0004, value: -350 },
    { name: 'Freelancer', id: 0005, value: 850 },
    { name: 'Desk', id: 0006, value: -1300 },
]

//Return a new array with only value property
const amount = transactions.map(transaction => transaction.value)

//Take expenses and payments
const expenses = []
const payments = []
amount.forEach(transaction => {
    if (transaction < 0) {
        expenses.push(transaction)
    } else {
        payments.push(transaction)
    }
})

console.log("=====Expenses=====")
console.table(expenses);

console.log("=====Payments=====")
console.table(payments);