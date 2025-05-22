const http = require("http")

// http.createServer((req,res)=>{
//     res.write('<h1>hello</h1>')
//     res.end()
// }).listen(900,console.log("working..."))




http.createServer((req,res)=>{
    res.write('<h1>hello i am 900 page</h1>')
    res.write('<a href="http://localhost:800">click me</a>')
    res.end()
}).listen(900,console.log("900 page working"))


http.createServer((req,res)=>{
    res.write('<h1>hello i am 800 page</h1>')
    res.write('<a href="http://localhost:900">click me</a>')
    res.end()
}).listen(800,console.log("800 page working"))