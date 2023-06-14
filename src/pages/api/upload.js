import multer from 'multer';

const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);
// export default handler;
const upload = multer({
  dest: "./",
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

const handler = async (req, res) => {
    console.log(req.body)
    upload.single('file'), async function(req, res, error) {
        await pipeline(
            file.stream,
            fs.createWriteStream(`${__dirname}/../public/images/${fileName}`)
          );
      if (error) {
        console.error('Error uploading file:', error);
        return res.status(500).json({ error: 'Error uploading file' });
      }
  
      // File upload successful
      return res.status(200).json({ message: 'File uploaded successfully' });
    };
  };
  
//   export default handler;
  
//   router.post("/upload", upload.single("file"), async function(req, res, next) {
//     const {
//       file,
//       body: { name }
//     } = req;
  
//     // const fileName = name + file.detectedFileExtension;
   
  
//     res.send("File uploaded as " + fileName);
//   });