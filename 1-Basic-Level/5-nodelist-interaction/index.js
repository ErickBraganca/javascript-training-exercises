/*
     Basicamente essa função recupera o elemento pelo qual
     veio o evento, usa o name único dele para gerar uma
     lista de inputs e depois os filtra para saber quais são
     de entrada, quais são de saída e quais são os totais.
 */
const listenNodeList = (event) => {
    const element = event.target
    const name = element.name
    const nodeList = [...document.querySelectorAll(`[name="${name}"]`)]

    //Get elements by amount classe
    const amountInputs = nodeList.filter((item) => {
        return item.classList[0] === 'amount'
    })
    const amountTotal = amountInputs.pop()
    const amountSum = balanceField(amountInputs)

    // Get Element by expenses class
    const expensesInputs = nodeList.filter((item) => {
        return item.classList[0] === 'expenses'
    })
    const expensesTotal = expensesInputs.pop()
    const expensesSum = balanceField(expensesInputs)

    //Render the sum in right inputs
    expensesTotal.value = expensesSum
    amountTotal.value = amountSum - expensesSum

}

//Função que realiza a soma dos valores contidos na lista de inputs
const balanceField = (inputs) => {
    const sum = inputs.reduce((accumulator, input) => {
        value = parseFloat(input.value) || 0
        return accumulator + value
    }, 0)
    return sum
}

// Aqui to pegando a referência do form pelo id
const form = document.getElementById("app")
// Aqui to adicionando um event listener no form
form.addEventListener("input", listenNodeList)


/*  Esse código aqui abaixo serve apenas para 
    renderizar os campos no HTML para que eu
    possa acessalos.
*/
empregados = [
    { name: "Erick", id: 121 },
    { name: "Maiara", id: 122 },
    { name: "Robert", id: 123 },
    { name: "José", id: 124 },
    { name: "Diana", id: 125 },
    { name: "Diogo", id: 126 },
    { name: "Guilherme", id: 127 },
]

const renderElements = (data) => {
    data.forEach(element => {
        const template =
            `
                <table class="table-content" id="table">
                    <tr>
                        <th><h1>${element.name}</h1></th>
                    </tr>
                    <!--Inicio Valores de Entrada-->
                    <tr>
                        <td><label>Salário</label></td>
                        <td><input name="${element.id}" class="amount" type="text"></td>
                    </tr>
                    <tr>
                        <td><label>Comissão</label></td>
                        <td><input name="${element.id}" class="amount" type="text"></td>
                    </tr>
                    <tr>
                        <td><label>Vale Transporte</label></td>
                        <td><input name="${element.id}" class="amount" type="text"></td>
                    </tr>
                    <tr>
                        <td><label>Total a Receber</label></td>
                        <td><input name="${element.id}" class="amount total" style="background-color:blue; font-weight: bold; color: white" type="text"></td>
                    </tr>
                    <!--Final Valores de Entrada-->
                    <!--Inicio Valores de Saída-->
                    <tr>
                        <td><label>Plano de Saúde</label></td>
                        <td><input name="${element.id}" class="expenses" type="text"></td>
                    </tr>
                    <tr>
                        <td><label>Vale</label></td>
                        <td><input name="${element.id}" class="expenses" type="text"></td>
                    </tr>
                    <tr>
                        <td><label>Gasto de Farmácia</label></td>
                        <td><input name="${element.id}" class="expenses" type="text"></td>
                    </tr>
                    <tr>
                        <td><label>INSS / IR</label></td>
                        <td><input name="${element.id}" class="expenses" type="text"></td>
                    </tr>
                    <tr>
                        <td><label>Gasto Convênio</label></td>
                        <td><input name="${element.id}" class="expenses" type="text"></td>
                    </tr>
                    <tr>
                        <td><label>Total de Despesas</label></td>
                        <td><input name="${element.id}" class="expenses total" style="background-color:red; font-weight: bold; color: white" type="text"></td>
                    </tr>
                </table>
            `
        const div = document.createElement("div")

        div.innerHTML = template
        form.appendChild(div)
    })
}
renderElements(empregados)