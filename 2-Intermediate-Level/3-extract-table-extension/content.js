/*---- Content Script ----*/

/*------------------------------------------
This script converts the HTML collection
of the table into an array of objects
with the properties (key and value) created
dynamically.
-------------------------------------------*/

//Return the HTML collection of all tables in the active webpage.
const tableContent = document.getElementsByTagName("table")
//Pick the index 0 in returned HTML Collection
const tableData = Array.from(tableContent[0].rows)

//Convert of HTMLcollection into arrays and these arrays into arrays of objects.
const extractTable = (callback) => {
  let tableHeader = []
  let tableArray = []

  function init() {
    tableData.forEach((key, index) => {
      const tableRows = Array.from(key.children)
      const textRows = tableRows.map(node => node.innerText)

      if (index === 0) {
        //Return only the header of the table (th).
        console.log("[Content Script] - Table Head", textRows)
        tableHeader = textRows
      } else {
        //Return each line data of the table (td).
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

  //This is the routine responsible for the connection and send message to background.js
  chrome.runtime.sendMessage({
    from: 'content',
    subject: 'extract',
    data: tableArray
  })
}

//This is the routine responsible for the connection and send message to popup.js
chrome.runtime.onMessage.addListener((request, sender, response) => {
  if ((request.from === 'popup') && (request.subject === 'extract')) {
    const requestedBy = sender // Just a store of sender data
    try {
      //The response is injected as a call back parameter of the table extraction function.
      extractTable(response)
    } catch (error) {
      console.log(error)
    }
    return true
  }
})
