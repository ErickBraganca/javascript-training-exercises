/*---- Background Script ----*/

chrome.runtime.onMessage.addListener((msg) => {
    if ((msg.from === 'content') && (msg.subject === 'extract')) {
        console.log("[Background Script] - Table Array Extracted")
    }
})