const express = require('express');
const path = require('path');
const app = express();
const webpack = require('webpack')

const config = require('../config/index.js');
// app.get('/', function(req, res){
//     res.send('hello world!');
// })
const compiler = webpack(config);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    quiet: true
  })
  
  var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {}
  })
  // force page reload when html-webpack-plugin template changes
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
      hotMiddleware.publish({ action: 'reload' })
      cb && cb()
    })
  })
app.use(devMiddleware)
app.use(hotMiddleware)
app.use(express.static('../dist/assets'));


const server = app.listen(3000, function(){
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', port);
})