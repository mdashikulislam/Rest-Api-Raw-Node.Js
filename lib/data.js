/*
* Title: Api Data
* Description : Api Data
* Author: Md Ashikul Islam
* Date: 27/07/2022
* */
const fs = require('fs');
const path = require('path');
//app object -- module scaffolding
const lib = {};
//base directory of the data folder
lib.basedir = path.join(__dirname,'/../.data');
//write data to file
lib.create = (dir, file, data, callback) =>{
    //create folder if not exists
    if (!fs.existsSync(lib.basedir+'/'+  dir)){
        fs.mkdirSync(lib.basedir+'/'+  dir);
    }
    //open file for writing
    fs.open(lib.basedir+'/'+dir+'/'+file+'.json','wx', (err,fd) => {
        if (!err && fd){
            //convert data to string
            const stringData = JSON.stringify(data);
            //Write data to file and then clsoe it
            fs.write(fd,stringData, (err) => {
                if (!err){
                    fs.close(fd, (err) =>{
                        if (!err){
                            callback(false);
                        }else{
                            callback('Error closing the new file');
                        }
                    });
                }else {
                    callback('Err writing new file')
                }
            });
        }else {
            callback('There was an error file make already exists');
        }
    });
}
//read data from json file
lib.read = (dir,file,callback) => {
    fs.readFile(lib.basedir + '/' + dir + '/' +file + '.json','utf8', (err,data) =>{
        callback(err,data);
    });
}
//Update data from json
lib.update = (dir,file,data,callback) => {
  fs.open(lib.basedir + '/' + dir + '/' +file + '.json','r+', (err, fd) => {
    if (!err && fd){
        //convert data to string
        const stringData = JSON.stringify(data);
        fs.ftruncate(fd,(err) => {
            if (!err){
                //write to the file and close
                fs.writeFile(fd,stringData, (err) =>{
                    if (!err){
                        fs.close(fd,(err) => {
                            if (!err){
                                callback(false);
                            }else{
                                callback('Error closing file');
                            }
                        });
                    }else{
                        callback('Error writing File');
                    }
                })
            }else{
                callback('Error truncting file')
            }
        });
    }else {
        callback('File not found');
    }
  });
};

module.exports = lib;