const express = require('express')
const app = express()


const Name = []

app.get('/',(req,res)=>{
    res.send('welcome..')
})

app.set('view engine','ejs')

app.get('/home',(req,res)=>{
    res.render('a',{u:Name})
})



app.listen(900,console.log('runing...'))