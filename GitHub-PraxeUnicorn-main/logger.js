/*(function(exports,require,module,__filename,__dirname){

console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';

function log(message){
    //http request
console.log(message);
}

module.exports = log;
//module.exports.endPoint = url;
})*/

/*
const EvenEmitter = require('events');
const { Module } = require('module');

var url = 'http://mylogger.io/log';
class logger extends EvenEmitter{
    log(message){
        console.log(message);
        this.emit('messageLoggd', { id: 1, url: 'http://' });
    }
}
module.exports = logger;*/