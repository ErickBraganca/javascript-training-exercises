/*--------------------------------------
Explorar o reduce na iteração de arrays
retornando do array transactions o total
de despesas e receitas. 
---------------------------------------*/

const transactions = [
    { name: 'NoteBook', id: 0001, amount: -4300 },
    { name: 'Keyboard', id: 0002, amount: -350.85 },
    { name: 'Salary', id: 0003, amount: 8500 },
    { name: 'Monitor', id: 0004, amount: -350 },
    { name: 'Freelancer', id: 0005, amount: 850 },
    { name: 'Desk', id: 0006, amount: -1300.25 },
]

//Return a new array with only value property
const amounts = transactions.map(transaction => transaction.amount)

//Defining criteria for expense and revenue filter
const expensesFilter = transaction => transaction < 0
const revenueFilter = transaction => transaction > 0

//Performing expenses and revenue filter
const expenses = amounts.filter(expensesFilter)
const revenue = amounts.filter(revenueFilter)

const totalExpenses = Math.abs(expenses.reduce((accumulator, value) => accumulator + value, 0)).toFixed(2)
const totalRevenue = revenue.reduce((accumulator, value) => accumulator + value, 0).toFixed(2)
const balance = (totalRevenue - totalExpenses).toFixed(2)

console.log(`Entrada: ${totalRevenue}R$ | Saída: ${totalExpenses}R$ | Saldo: ${balance}R$`)








