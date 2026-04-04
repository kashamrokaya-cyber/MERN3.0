const express = require('express'); 
const app = express();// in an app has many methods like listen, get, post and etc.
// 127.0.0.1:3000 we can use insted of localhost:3000,
// [::1]:3000  insted of localhost:3000

// always we can  request  (get) element of http  in browser not post, patch, update

// always we send data in the form of JSON format ({...}); not string like res.send("mern")

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
