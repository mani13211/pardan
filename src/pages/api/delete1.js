import fs from "fs/promises"
import path from "path"

const imagesDirectory = path.join(process.cwd(), "public/images")

const deleteImage = async imagePath => {
  try {
    await fs.unlink(path.join(imagesDirectory, imagePath))
    return true // Deletion successful
  } catch (error) {
    console.error("Error deleting image:", error)
    return false // Deletion failed
  }
}

const imagesHandler = async (req, res) => {

  const { imagePath } = req.body

  if (!imagePath) {
    res.status(400).json({ error: "Image path is required" })
    return
  }

  const success = await deleteImage(imagePath)

  if (success) {
    res.json({ message: "Image deleted successfully" })
  } else {
    res.status(500).json({ error: "Failed to delete image" })
  }
}

export default imagesHandler
