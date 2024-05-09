
/*function sayHello(name){
    console.log('Hello' + name);
}
sayHello('Mosh');
console.log(window);*/


/*setTimeout();
clearTimeout();

setInterval();
clearInterval();*/

/*var message = '';
console.log(global.message);


var sayHello  = function(){

}

window.sayHello();*/


//console.log(module);


/*const log = require('./logger');

log('message');*/

/*const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);*/

/*const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('total memory :  ${totalMemory}');
console.log('free memory :  ${freeMemory}');*/

/*const fs = require('fs');
fs.readdir('$',function(err,files){
    if(err) console.log('Error',err);
    else console.log('Result',files);
});*/
/*
const EvenEmitter = require('events');
const logger = require('./logger');
const logger = new logger();

const emitter = new EvenEmitter();
logger.on('messageLogged',(arg) => {
    console.log('Listener called',arg);
});
logger.log('message');*/

/*const http = require('http');
const server = http.createServer((req, res)=> {
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3,]));
        res.end();
    }
});
server.listen(3000);
console.log('Listening on port 3000...');*/


