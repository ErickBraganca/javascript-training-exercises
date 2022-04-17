const parent = document.getElementById('pai')
const add = document.getElementById('add')

//Modelo de dados do Pai
const model = {
    class: "Parent",
    tag: "Parent1",
    status: "enable"
}
//Container para os filhos criados
const childrens = []

//Função Renderiza cada filho do array childrens dentro da div pai
function renderChildrensInDOM(elements) {
    //Limpa o DOM para evitar repetição de elementos.
    parent.innerHTML = null

    //Itera pelo array de filhos e os renderiza dentro da div pai
    elements.forEach((element, index) => {
        //Template String de elementos HTML
        const htmlElements =
            `
        <div class="${element.status}" id="${element.tag}">
            <h2>Child ${element.tag}</h2>
            <span>${element.status}</span>
            <button type="button" onclick="toggle(${index})">Toggle</button>   
        </div>
        `
        //Insere os elementos dentro da div
        const elements = createHTMLElement(htmlElements)
        parent.appendChild(elements)
    })
}
//Função que cria novos filhos
function makeChildrens(model) {
    //Clonando as propriedades do modelo do pai
    const children = { ...model }
    //Modificando estaticamente as propriedades dos filhos
    children.class = "Child"
    children.status = "Disable"
    children.tag = (childrens.length) + 1
    //Enviando o novo filho par ao array de filhos
    childrens.push(children)
    renderChildrensInDOM(childrens)
}

//Listener do potão de adicionar filhos
add.addEventListener("click", function () {
    makeChildrens(model)
})

//Modificando dinamicamente as propriedades dos filhos
function toggle(index) {
    let currentStatus = childrens[index].status
    switch (currentStatus) {
        case "Disable":
            childrens[index].status = "Enable"
            break
        case "Enable":
            childrens[index].status = "Disable"
        break
    }
    renderChildrensInDOM(childrens)
}

//Convert template string in HTML DocumentFragment
function createHTMLElement(elements) {
    const template = document.createElement("template")
    template.innerHTML = elements.trim()
    return template.content
}