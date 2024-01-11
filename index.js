const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const qrcode = require('qrcode');

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

app.get('/',(req,res)=>{
    res.render("index")
})
app.post('/result',(req,res)=>{
    let gettingdata = req.body.qrcodetext;
    qrcode.toDataURL(gettingdata,(err,data)=>{
        res.render("result",{kaja:data})
    })
    
})

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'));
// })

// app.get('/result',(req,res)=>{
//     res.sendFile(path.join(__dirname,'result.html'));
// })
app.listen(10000)
