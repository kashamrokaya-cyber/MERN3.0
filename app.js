const express = require('express'); 
const connectToDatabase = require('./database'); //we dont use index.js after /database/ becoz not need when index term given

const app = express();
 connectToDatabase()
app.get('/',(req,res)=>{
 res.status(200).json({
    message:"Hello world.."
 })
    
})

app.get("/about",(req,res)=>{
    res.status(200).json({
        message:"hello i am from about api"
    })
})
app.get("/source",(req,res)=>{
    res.json({
        message:"i ma source"
    })
})

app.get('/products',(req,res)=>{
    res.send("i am products");
})

app.listen(3000,()=>{ //total port number limited 0-65535 adn 0-1000 not good for port because it can be used for ownself.
    console.log("listening 3000");
});
