/*
* Title: Sample Handler
* Description : Sample Handler
* Author: Md Ashikul Islam
* Date: 26/07/2022
* */
//module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties,callback) =>{
    callback(200,{
        message:'This is sample url'
    });
}
module.exports = handler;