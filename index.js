const express=require("express");
const dotenv=require("dotenv");
const db=require("./db/connect");
const cors=require("cors")
const userRouter=require("./route/userRouter")
const productRouter=require("./route/productroute")






dotenv.config()
const app=express();
app.use(express.json());


// connection
db();
app.use(cors())



//Middleware

app.use("/api",productRouter);
app.use("/api",userRouter)




const port=process.env.PORT||7000;







app.listen(port,()=>{
    console.log(`App is Running http://localhost:${port}`);
});