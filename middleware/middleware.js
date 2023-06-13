const mongoose = require('mongoose');

const connectDb = handler =>async(req,res)=>{
  if(mongoose.connections[0].readyState){
    return handler(req,res)
  }
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {

    useNewUrlParser: "true",
    useUnifiedTopology: "true"
  
  })
  return handler(req,res)
}
export default connectDb
