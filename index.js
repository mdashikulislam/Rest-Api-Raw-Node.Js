//Dependency
const http = require('http');
//app object -- module scaffolding
const app = {};
//Configuration
app.config = {
    port:3000
}
//Create Server
app.createServer = () =>{
    const server = http.createServer(app.handleRequest);
    server.listen(app.config.port,()=>{
        console.log(`Listening to port ${app.config.port}`);
    })
}
//handle Request Response
app.handleRequest = (req,res)=>{
    res.end('Hello World');
}
//Start the server
app.createServer();