const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    // res.send('welcomer....')
    res.sendFile('./a.html',{root:__dirname})

})
app.get('/about',(req,res)=>{
    // res.send('welcomer....')
    res.sendFile('./task/about.html',{root:__dirname})

})
app.get('/home',(req,res)=>{
    // res.send('welcomer....')
    res.sendFile('./task/home.html',{root:__dirname})

})

// app.get('*',(req,res)=>{
//     res.send("404!")
// })

app.use((req,res)=>{
    res.status(404).sendFile("./task/error.html",{root:__dirname})
})

app.listen(800,()=>{console.log("runing...");})

 
