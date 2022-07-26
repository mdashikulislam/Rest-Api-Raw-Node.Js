/*
* Title: Handle Requset Response
* Description : Handle Requset Response
* Author: Md Ashikul Islam
* Date: 26/07/2022
* */
//Dependency
const url = require('url');
const {StringDecoder} = require('string_decoder');

const handler = {};
//handle Request Response
handler.handleReqRes = (req,res)=> {
    //Parse url
    const parseUrl = url.parse(req.url,true);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headers = req.headers;
    const decoder = new StringDecoder('utf8');
    let realData = '';
    req.on('data', (buffer) =>{
        realData +=decoder.write(buffer);
    });
    req.on('end',()=>{
        realData += decoder.end();
        console.log(realData)
        res.end(realData);
    });
}
module.exports = handler;


