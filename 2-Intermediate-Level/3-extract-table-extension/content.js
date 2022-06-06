/*---- Content Script ----*/

const tableContent = document.getElementsByTagName("table")
const tableData = Array.from(tableContent[0].rows)

const extractTable = (callback) => {
  let tableHeader = []
  let tableArray = []

  function init() {
    tableData.forEach((key, index) => {
      const tableRows = Array.from(key.children)
      const textRows = tableRows.map(node => node.innerText)

      if (index === 0) {
        console.log("[Content Script] - Table Head", textRows)
        tableHeader = textRows
      } else {
        console.log("[Content Script] - Table Rows", textRows)
        constructor(textRows)
      }
    })
  }
  function constructor(values) {
    const newObject = {...{}}
    values.forEach((key, index) => {
      newObject[tableHeader[index]] = key
    })
    tableArray.push(newObject)
  }
  init()
  callback(tableArray)
  console.log("[Content Script] - Finshed Process", tableArray)

  chrome.runtime.sendMessage({
    from: 'content',
    subject: 'extract',
    data: tableArray
  })
}

chrome.runtime.onMessage.addListener((request, sender, response) => {
  if ((request.from === 'popup') && (request.subject === 'extract')) {
    const requestedBy = sender
    try {
      extractTable(response)
    } catch (error) {
      console.log(error)
    }
    return true
  }
})
