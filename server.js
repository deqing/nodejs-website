let http = require('http')

let start = function() {
  http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.write('Hi version 2.11')
    res.end()
    console.log('received a request')
  }).listen(5000)
}

exports.start = start
