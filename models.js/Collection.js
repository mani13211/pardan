const mongoose = require (`mongoose`)
const CollectionSchema = new mongoose.Schema({
    img_path:String,
    id:String,
   
  },{timeStamps:true}

  );
  export default mongoose.models.Collection || mongoose.model("Collection",CollectionSchema)

