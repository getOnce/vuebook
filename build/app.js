const express = require('express');
const path = require('path');
const app = express();

// app.get('/', function(req, res){
//     res.send('hello world!');
// })
app.use(express.static('../dist/assets'));

const server = app.listen(3000, function(){
    let h = server.address();
    console.log(h);
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', h, port);
})