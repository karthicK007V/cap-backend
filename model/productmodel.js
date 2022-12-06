const mongoose=require("mongoose");
// const Schema=mongoose.Schema;


const productSchema = mongoose.Schema({
    name:{type: String,require},
 
    price:{type: Number,require},
  
    image:{type: String,require},
    category:{type: String,require}

},{
    timestamps:true,
})
const productmodel=  mongoose.model("product",productSchema)

module.exports=productmodel;