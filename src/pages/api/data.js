import Collection from "../../../models.js/Collection"
import connectDb from "../../../middleware/middleware"
 const  handler = async(req, res)=> {
    let data= await Collection.find({})

    res.status(200).json({ data:data})
  }
  export default  connectDb(handler)