/*--------------------------------
Explorar o map na iteração em arrays
retornando as operações  de uma
lista de entradas e saídas
---------------------------------*/

const transactions = [
    { name: 'NoteBook', id: 0001, amount: -4300 },
    { name: 'Keyboard', id: 0002, amount: -350 },
    { name: 'Salary', id: 0003, amount: 8500 },
    { name: 'Monitor', id: 0004, amount: -350 },
    { name: 'Freelancer', id: 0005, amount: 850 },
    { name: 'Desk', id: 0006, amount: -1300 },
]

//Return a new array with only value property
const amounts = transactions.map(transaction => transaction.amount)

//Take expenses and payments
const expenses = []
const payments = []
amounts.forEach(transaction => {
    if (transaction < 0) {
        expenses.push(transaction)//Pushing element < 0 into expenses variable
    } else {
        payments.push(transaction)//Pushing element = or > 0 into payments variable
    }
})

console.log("=====Expenses=====")
console.table(expenses)

console.log("=====Payments=====")
console.table(payments)