const mongoose=require("mongoose");


// mongoose.connect(process.env.MONGO_URL,{useUnifiedTopology:true ,useNewUrlParser:true})

// const db=mongoose.connection
// db.on('connected',()=>{
//     console.log("Mongo DB is connection successfully");
// })
// db.on("error",()=>{
//     console.log("Failed");

// })
// module.exports=mongoose
db=async()=>{
    try {
       const res=await mongoose.connect(process.env.MONGO_URL ,{ useNewUrlParser: true, useUnifiedTopology: true });
       console.log("connection is established");
    //    console.log(res);
}
        
     catch (error) {

        console.log('Error',error);
        
    }
}
    

module.exports=db;