const eventEmitter = require('events')
const fs = require('fs')
const path = require('path')

const emitter = new eventEmitter()

//Register of log event
emitter.on('log', (message) => {
    //Normalizing directory path
    const filePath = path.join(__dirname, './log/log.txt')
    //Return true or false for the log file existence.
    const fileStatus = fs.existsSync(filePath)

    if (fileStatus === true) {
        fs.appendFile(filePath, message, (error) => {
            if (error) throw error
        })
    } else {
        console.log("Log File...Writing")
        fs.writeFile(filePath, message, (error) => {
            if (error) throw error
        })
    }
})

function log(message) {
    emitter.emit('log', message)
}

module.exports = log

