// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Collection from "../../../models.js/Collection"
import connectDb from "../../../middleware/middleware"

const handler= async(req,res)=>{

  if(req.method == "POST"){
    console.log(req.body)
  
    Collection.deleteOne({id:req.body}).then(function (err,res) {
      if(res){
      
        console.log("deleted",req.body)

      }
     
   
    })
    res.status(200).json({success:true})
    console.log("deleted",req.body)
    
 
   
  }
  else{
    res.status(200).json("only post applied")
  }
  
}
 


export default  connectDb(handler)
