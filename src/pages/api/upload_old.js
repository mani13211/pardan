// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Collection from "../../../models.js/Collection";
import connectDb from "../../../middleware/middleware"

const handler= async(req,res)=>{

  let id=Math.floor(Math.random() * Date.now());
  if(req.method == "POST"){
   new Collection({img_path:req.body.img_path,id:id}).save();
    res.status(200).json("recived",req)
  }
  else{
    res.status(200).json("only post applied")
  }
  
}
 


export default  connectDb(handler)
