/*---- Popup Script ----*/

const app = document.getElementById("app")

//Render each object inside the array received from content.js into HTML Elements
const renderDOMItems = (data) => {
  data.forEach((key) => {
    const board = document.createElement("div")
    board.setAttribute("class", "coin-board")

    const code = document.createElement("h3")
    code.innerText = key.Code

    const name = document.createElement("span")
    name.innerText = key.Name

    const link = document.createElement("a")
    link.setAttribute("href", `https://www.binance.com/pt-BR/trade/${key.Code}_BUSD`)
    link.setAttribute("target", 'target="_blank"')
    link.innerText = "Acessar"

    board.append(code, name, link)
    app.append(board)
  })
}

//When the popup is loaded, a message is sent content script a message to start the table parsing.
window.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { from: 'popup', subject: 'extract' },
      function (response) {
        if (!window.chrome.runtime.lastError) {
          //This Call Back function, is executed with the response return of the content script 
          renderDOMItems(response)
        }
      })
  })
})
