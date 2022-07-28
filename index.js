/*
* Title: Uptime monitoring rest api
* Description : Uptime monitoring rest api
* Author: Md Ashikul Islam
* Date: 26/07/2022
* */

//Dependency
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
//app object -- module scaffolding
const app = {};

//Create Server
app.createServer = () => {
    const server = http.createServer(handleReqRes);
    server.listen(environment.port,() => {
        console.log(`Listening to port ${environment.port}`);
    });
}
//Start the server
app.createServer();