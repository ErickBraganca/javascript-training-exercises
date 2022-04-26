/*---------------------------------------------------------
Criar uma estrutura minimalista de um servidor web usando
os recursos nativos do Node.js, sem frameworks
-----------------------------------------------------------*/
//Import native resources
const http = require("http")

//Instancing new server from http module
const server = http.createServer(handler)

//Request Handler
async function handler(request, response) {
    const url = request.url
    const method = request.method
           
    //Getting data from body content
    request.on("data", (data) => {
        let body = JSON.parse(data)
        console.log(body);
    })

    //Sending raw response to client
    response.write("Request Received")
    response.end()
}

//Normalizing Server PORT 
const defaultPort = 5500
const PORT = process.env.PORT || defaultPort

//Set Server Listener
server.listen(PORT, () => {
    console.log(`Server Started \n Running on http://localhost:${PORT}/`)
})