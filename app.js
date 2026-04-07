const express = require('express'); 
const connectToDatabase = require('./database'); //we dont use index.js after /database/ becoz not need when index term given
 
require('dotenv').config();

const app = express();
//  connectToDatabase()
// app.get('/',(req,res)=>{
//  res.status(200).json({
//     message:"Hello world.."
//  })
    
// })
//about
app.get("/about",(req,res)=>{
    res.send("i am bout")
})
// //source
// app.get("/source",(req,res)=>{
//     res.json({
//         message:"i ma source"
//     })
// })
//products
// app.get('/products',(req,res)=>{
//     res.send("i am products");
// })

//CreateBlog
// app.post('/blog',(req,res)=>{
//    res.status(200).json({
//     message:"blog api hit successfully",
//    })
// })


app.listen(process.env.PORT,()=>{ //total port number limited 0-65535 adn 0-1000 not good for port because it can be used for ownself.
    console.log("listening ");
});
