const { listenerCount } = require('events')
var http=require('http')

http.createServer((req,res)=>{
    res.write('hello.')
    res.end()
}).listen(8000)