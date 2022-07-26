/*
* Title: NotFound handler
* Description : notFound handler
* Author: Md Ashikul Islam
* Date: 26/07/2022
* */
//module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties,callback) =>{
    callback(404,{
        message:'Your requested url not found'
    });
}
module.exports = handler;