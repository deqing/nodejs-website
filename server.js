let http = require('http')

let start = function() {
  let onRequest = function(request, response) {
    response.writeHead(200, {'Content-type': 'text/plain'})
    response.write('Hi version 2.1')
    response.end()
    console.log('received a request')
  }

  http.createServer(onRequest).listen(5000)
}

exports.start = start
