const express=require("express");
const dotenv=require("dotenv");
const db=require("./db/connect");
const cors=require("cors")
// const user=require("./model/usermodel")
// const product=require("./model/productmodel")



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




// app.get("/getproduct",(req,res,next)=>{
//     product.find((err,data)=>{
//         console.log(data,err);
//         if(err){
//             console.log(err);
            
//             res.status(404).json({
//                 message:"data failed"
//             })

//         }
//         else{
//             res.send(data).status(201)
//         }
//     })

// })

// app.post("/createproduct",(req,res,next)=>{
//     const payload=req.body;
//     const newproduct=new product(payload);
//     newproduct.save((err,data)=>{
//         if(err){
//             console.log(err);
//             res.status(405).json({message:"Create Failed"})

//         }else{
//             res.send(data).status(201)
//         }
//     })
// })

// app.put("/updateproduct/:proID",(req,res,next)=>{

//     try {
//         product.findByIdAndUpdate({_id:req.params.proID},{$set:req.body},(err,data)=>{
//             if(err){
//                 console.log(err);
//                 res.status(400).json({message:"Not Update Products"})
//             }else{
//                 res.status(201).json({
//                     data:data,
//                     message:"Update the Products"
//                 })
//             }
//         })
        
//     } catch (error) {
//         console.log(error);
//         res.send({message:"Internal server error "}).status(400)
//     }
    
   
// })

// app.delete("/deleteproduct/:proID",(req,res)=>{
//     product.deleteOne({_id:req.params.proID},(err,data)=>{
//         if(err){
//             console.log(err);
//             res.send({message:"Not Delete The products"}).status(400)
//         }else{
//             res.send({message:`Delete the ${req.params.proID} was Deleted`}).status(200)
//         }
//     })
// })



// app.post("/signup",async(req,res)=>{
//     try {
//         const exuser= await user.findOne({email:req.body.email});
//         if(exuser)
//            return res.json({
//             message:"Your Already User Please Login Here",
//             success:false

//            }).status(409);
          
          
//            const salt=await bcrypt.genSalt(Number(10));
//            const hashpassword=await bcrypt.hash(req.body.password,salt)
           
//            await new user({...req.body,password:hashpassword}).save();
//           return res.send({message:"user create Successfully"}).status(201)
        
        
//     } catch (error) {
//         console.log(err);
//         res.send({message:"Internal Server Error"}).status(500)
        
//     }
    
// })

// app.post("/signin",async(req,res)=>{

//     try {
//         const users=await user.findOne({email:req.body.email})
//         console.log(users);
//         if(!users){
//         return res.send({message:"Your not exist user please signup here"}).status(409);
//         }
       
//         const validpass=await bcrypt.compare(req.body.password,users.password);
//         console.log(validpass);
//         if(!validpass){
//         return res.send({message:"Please Enter Valid Password"}).status(409);
//         }
        
       
   
       
//         const token=jwt.sign(users.toObject(),process.env.SECRET_KEY,{expiresIn: "1hr"})
     
        
//          res.send({token:token}).status(200);
      
      
        
//     } catch (error) {
//         res.send({message:`Internal Server Error${error}`}).status(500)
        
//     }





// })



app.listen(port,()=>{
    console.log(`App is Running http://localhost:${port}`);
});