const express = require('express'); 
const app = express();// in an app has many methods like listen, get, post and etc.


app.get('/',(req,res)=>{
 res.json({
    message:"Hello world.."
 })
    
})

app.get("/about",(req,res)=>{
    res.json({
        message:"hello i am from about api"
    })
})
app.get("/source",(req,res)=>{
    res.json({
        message:"i ma source"
    })
})

app.listen(3000,()=>{ //total port number limited 0-65535 adn 0-1000 not good for port because it can be used for ownself.
    console.log("listening 3000");
});