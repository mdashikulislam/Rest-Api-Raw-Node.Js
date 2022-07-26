/*
* Title: Application Route
* Description : Application Route
* Author: Md Ashikul Islam
* Date: 26/07/2022
* */
//Dependency
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    'sample':sampleHandler
};
module.exports = routes;