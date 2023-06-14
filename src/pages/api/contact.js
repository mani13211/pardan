import connectDb from "../../../middleware/middleware"
import contact from "../../../models.js/contact"

const handler=async (req,res)=>{
if(req.method=="POST"){
  let p=  new contact({
      name:req.body.name,
      message:req.body.message,
      email:req.body.name,
      phone:req.body.phone,
    })
  await p.save()
  res.status(200).json({success:true})

}else{
  res.status(200).json({message:"not allowed"})

}
}
export default connectDb(handler)