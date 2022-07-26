/*
* Title: Uptime monitoring rest api
* Description : Uptime monitoring rest api
* Author: Md Ashikul Islam
* Date: 26/07/2022
* */

//Dependency
const http = require('http');

const {handleReqRes} = require('./helpers/handleReqRes')
//app object -- module scaffolding
const app = {};

//Configuration
app.config = {
    port:3000
}
//Create Server
app.createServer = () => {
    const server = http.createServer(app.handleRequest);
    server.listen(app.config.port,()=>{
        console.log(`Listening to port ${app.config.port}`);
    });
}
//handle Request Response
app.handleRequest = handleReqRes;
//Start the server
app.createServer();