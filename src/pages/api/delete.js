// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fetch from 'node-fetch';
const cloudinary = require("cloudinary").v2
const handler = async (req, res) => {
  let y2 = `${req.body}`
  if (req.method == "POST") {
    const apiKey = "746832252631631";
    const apiSecret = "tDnhvgJcthzeC9SnvLAyc2B0Dm4";
    const cloudName = "dxmitb6h1";
    const publicId = req.body;
    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret
    });
    cloudinary.uploader.destroy(eval(y2), (error, result) => {
      console.log(result)

      res.status(200).json({ message: result });



    })

  }
  else {
    res.status(200).json("only post applied")
  }

}



export default handler
