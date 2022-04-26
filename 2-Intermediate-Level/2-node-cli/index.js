/*---------------------------------------------------------
Criar uma estrutura que utilize alguns recursos nativos do
Node em um ambiente de linha de comando.
-----------------------------------------------------------*/
const { freemem, totalmem, platform } = require("os")//Operating system module

function updateServerStats() {
    const serverPlatform = platform()
    const totalMemory = parseInt(totalmem() / 1024 / 1024)
    const freeMemory = parseInt(freemem() / 1024 / 1024)
    const usageMemory = parseInt(100 - ((freeMemory / totalMemory) * 100))

    const stats = {
        free: `${freeMemory} MB`,
        total: `${totalMemory} MB`,
        usage: `${usageMemory}%`
    }
    console.clear()
    console.log(serverPlatform)
    console.table(stats)
}

setInterval(updateServerStats, 1000);