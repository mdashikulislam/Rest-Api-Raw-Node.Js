/*
* Title: Environment
* Description : Handle Environment
* Author: Md Ashikul Islam
* Date: 26/07/2022
* */
const environments = {};
environments.staging = {
    port:3000,
    envName:'staging'
}
environments.production = {
    port:5000,
    envName:'production'
}
//determine which environment pass
const currentEnvironments = typeof (process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV: 'staging';
//Export crossponding environ
const  environmentToExport =
    typeof (environments[currentEnvironments]) === 'object'
    ? environments[currentEnvironments]
    :environments.staging;


module.exports = environmentToExport;