console.log("Hello Node");

const { response } = require('express');
// Creating a server using express

const express = require('express');

const app = express();

const p = require('./person.json');

app.get('/', function(request, response){
    /* response.send('Hello Node Js'); */
    response.send(p);
}).listen(3000, () => {
    console.log('server is running');
})

