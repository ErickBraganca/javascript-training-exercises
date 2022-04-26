/*---------------------------------------------------------
Criar uma estrutura que utilize alguns recursos nativos do
Node em um ambiente de linha de comando.
-----------------------------------------------------------*/
const { freemem, totalmem, platform } = require('os')//Operating system module
const log = require('./logger')

function updateServerStats() {
    const serverPlatform = platform()
    const totalMemory = parseInt(totalmem() / 1024 / 1024)
    const freeMemory = parseInt(freemem() / 1024 / 1024)
    const usageMemory = parseInt(100 - ((freeMemory / totalMemory) * 100))

    const stats = {
        Total_Memory: `${totalMemory} MB`,
        Free_Memory: `${freeMemory} MB`,
        Usage: `${usageMemory}%`
    }
    console.log("Registering...")
    log(`${JSON.stringify(stats)}\n`)
}

setInterval(updateServerStats, 1000);