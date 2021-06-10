const http = require('http')
const url = require('url')
const fs = require('fs')

const test = require('./asset/start')

http.createServer(function (req, res) {
    var q = url.parse(req.url, true).pathname;

    if(q == '/song'){
        // get song data in ./data/get.json 
        res.end()
    } else if(q == '/name'){
        // get name data in ./data/get.json 
        res.end()
    } else if(q == '/lyrics'){
        // get lyrics data in ./data/get.json 
        res.end()
    } else if(q == '/copy') {
        // copy ./data/get.json -> ./data/copy.json
        res.end()
    }

    if(q=='/test') {test.test(); res.write('check result in terminal'); res.end()}

}).listen(1000)
