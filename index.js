const express=require('express')
const app =express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")
const collection2=require("./mongodb2")
const tempelatePath=path.join(__dirname,'../templates')
app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/home.hbs",(req,res)=>{
    res.render("home")
})
app.get("/wardendisplay.hbs",(req,res)=>{
    res.render("wardendisplay")
})
app.get("/hostels.hbs",(req,res)=>{
    res.render("hostels")
})
app.get("/wardenlogin.hbs",(req,res)=>{
    res.render("wardenlogin")
})
app.get("/registrationform.hbs",(req,res)=>{
    res.render("registrationform")
})
app.get("/success.hbs",(req,res)=>{
    res.render("success")
})
app.get("/wardenlogin.hbs",(req,res)=>{
    res.render("wardenlogin")
})
app.get("/wardendisplay",(req,res)=>{
    res.render("wardendisplay")
})
app.get('/getdata',(req,res)=>{
    res.json({message:"svjsdnf"});
})
app.post("/registrationform.hbs",async(req,res)=>{
    const data={
        hno:req.body.hno,
        rank:req.body.rank,
        sname:req.body.sname,
        mail:req.body.mail,
        spno:req.body.spno,
        aano:req.body.aano,
        branch:req.body.branch,
        gender:req.body.gender,
        hostel:req.body.hostel,
        roomno:req.body.roomno,
        bed:req.body.bed,
        fathname:req.body.fathname,
        fphno:req.body.fphno
    }
     if(await collection.findOne({aano:req.body.aano}).aano===req.body.aano){
        res.send("Already Booked If You Want To Cancel Meet The Higher Officers")
     }
     else{
        await collection.insertMany([data])
        res.render("success")
     }
})
app.post("/wardenlogin.hbs",async(req,res)=>{
    try{
        const check=await collection2.findOne({user:req.body.user})
        if(check.pword===req.body.pword){
            res.render("wardendisplay")
        } 
        else{
            res.send("wrong password")
        } 
     }
    catch{
        res.send("wrong details")
    }
     
})

app.listen(3000,()=>{
    console.log("port connected")
})

