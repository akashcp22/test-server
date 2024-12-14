const mongoose=require('mongoose')
const DB_URL=process.env.DB_URL

mongoose.connect(DB_URL)
.then(()=>{
    console.log("connected to mongodb..")
}).catch((err)=>{
    console.log("db connection error",err)
})