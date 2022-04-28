/*---------------------------------------------
Explorar o filter na iteração de arrays
retornando do array transactions duas novas
listas contendo as receitas e despesas.
----------------------------------------------*/

const transactions = [
    { name: 'NoteBook', id: 0001, amount: -4300 },
    { name: 'Keyboard', id: 0002, amount: -350 },
    { name: 'Salary', id: 0003, amount: 8500 },
    { name: 'Monitor', id: 0004, amount: -350 },
    { name: 'Freelancer', id: 0005, amount: 850 },
    { name: 'Desk', id: 0006, amount: -1300 },
]

//Defining criteria for expense and revenue filter
const expensesFilter = transaction => transaction.amount < 0
const revenueFilter =  transaction => transaction.amount > 0

//Performing expenses and revenue filter
const expenses = transactions.filter(expensesFilter)
const revenue = transactions.filter(revenueFilter)

console.log("=====Expenses=====")
console.table(expenses)

console.log("=====Payments=====")
console.table(revenue)