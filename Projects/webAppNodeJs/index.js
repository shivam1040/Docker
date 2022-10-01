const express=require('express')

const app=express()

app.get('/', (req, res)=>{ //route handler at /
    res.send('hello') //sending response hi back
})

app.listen(8080, ()=>{
    console.log("listening")
})