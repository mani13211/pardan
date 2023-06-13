const mongoose = require('mongoose');

const connectDb = handler =>async(req,res)=>{
  if(mongoose.connections[0].readyState){
    return handler(req,res)
  }
  await mongoose.connect("mongodb+srv://paymentsetup:9815897261@cluster0.xayu3wr.mongodb.net/", {

    useNewUrlParser: "true",
    useUnifiedTopology: "true"
  
  })
  return handler(req,res)
}
export default connectDb
