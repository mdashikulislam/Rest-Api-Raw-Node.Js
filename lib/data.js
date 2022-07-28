/*
* Title: Api Data
* Description : Api Data
* Author: Md Ashikul Islam
* Date: 27/07/2022
* */
const fs = require('fs');
const path = require('path');
//app object -- module scaffolding
const data = {};
//base directory of the data folder
data.basedir = path.join(__dirname,'/../data');
//write data to file
data.create = (dir, file, data, callback) =>{
    //open file for writing
    fs.open(data.basedir+dir+'/'+file+'.json','wx', (err,fd) => {
        if (!err && fd){
            callback('');
        }else {
            callback('Could not create not new file. Its may already exists.');
        }
    });
}