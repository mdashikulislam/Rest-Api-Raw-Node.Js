/*
* Title: Handle Requset Response
* Description : Handle Requset Response
* Author: Md Ashikul Islam
* Date: 26/07/2022
* */
//Dependency
const url = require('url');
const {StringDecoder} = require('string_decoder');
const routes = require('../routes');
const {notFoundHandler} = require('../handlers/routeHandlers/notFoundHandler');

const handler = {};
//handle Request Response
handler.handleReqRes = (req,res)=> {
    //Parse url
    const parseUrl = url.parse(req.url,true);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headersObject = req.headers;
    const requestProperties = {
        parseUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject
    }
    const decoder = new StringDecoder('utf8');
    let realData = '';
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;


     req.on('data', (buffer) =>{
         realData +=decoder.write(buffer);
     });
     req.on('end',()=>{
         realData += decoder.end();
         chosenHandler(requestProperties,(statusCode,payload)=>{
             statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
             payload = typeof(payload) === 'object' ? payload : {};
             const payloadString = JSON.stringify(payload);
             res.writeHead(statusCode);
             res.end(payloadString);
         });
         res.end('hello');
     });
}
module.exports = handler;


