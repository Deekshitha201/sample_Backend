const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/hostelregistation")
.then(()=>{
    console.log("mongo connected")
})
.catch((err)=>{
    console.log(err)
})
const wardenSchema=new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    pword:{
        type:String,
        required:true
    }

})
const collection2=new mongoose.model("Collection2",wardenSchema)
module.exports=collection2