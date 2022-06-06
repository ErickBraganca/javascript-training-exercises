/*---- Popup Script ----*/

const app = document.getElementById("app")

const setDOMInfo = (data) => {
  data.forEach((key) => {
    const board = document.createElement("div")
    board.setAttribute("class", "coin-board")
    const code = document.createElement("span")
    code.innerText = `Código: ${key.Code}`
    const name = document.createElement("span")
    name.innerText = `Nome: ${key.Name}`
    const price = document.createElement("span")
    price.innerText = `Preço: ${key.Price}`

    board.append(code, name, price)
    app.append(board)
  })
}

window.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { from: 'popup', subject: 'extract' },
      function (response) {
        if (!window.chrome.runtime.lastError) {
          setDOMInfo(response)
        }
      })
  })
})
