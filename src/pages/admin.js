import React, { useEffect } from 'react'
import Mobileheader from './components/mobileheader'
import Navbar from './components/navbar'
import router,{useRouter} from 'next/router';
import Image from 'next/image'
import fs from "fs/promises"
import path from "path"
import Link from 'next/link';
import mongoose from 'mongoose';
//import Collection from '../../models.js/Collection';
import {RxCrossCircled} from 'react-icons/Rx';
import { useState } from 'react'
import { GiHand } from 'react-icons/gi';

import { IoMdPower } from 'react-icons/io';
function Admin({ dirs }) {
  useEffect(() => {
    if (!localStorage.getItem("protfolio-token")) {
      router.push("/login")
    }

  }, [])
  const logoutUser = () => {
    localStorage.removeItem("protfolio-token")
    router.push("/login")
  }
  const [image, setimage] = useState("")
  const [out, setout] = useState("")
  const router = useRouter();

  
  const [uploading, setUploading] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")
  const [selectedFile, setSelectedFile] = useState()

  const handleUpload = async () => {
    setUploading(true)
    try {
      if (!selectedFile) return
      const formData = new FormData()
      formData.append("myImage", selectedFile)


      
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/upload1`, {
                          method: "POST", 
                          body: formData
                        });

      console.log(response)
      setSelectedImage(null)
      router.reload()
    } catch (error) {
      console.log(error.response?.data)
    }
    setUploading(false)
  }
  const deleteImage = async (imagePath) => {
    try {
      const response = await fetch('/api/deleteImage', {
        method: 'POST',
        body: JSON.stringify({ imagePath }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        console.log('Image deleted successfully');
      } else {
        console.error('Failed to delete image');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  }
  
 
  const deleteItem=async(imagePath)=>{
    console.log("coming here")
    try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/delete1`, {
      method: 'POST',
      body: JSON.stringify({ imagePath }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      console.log('Image deleted successfully');
      router.reload()
    } else {
      console.error('Failed to delete image');
    }
  } catch (error) {
    console.error('Error deleting image:', error);
  }
    

  }

  return (
    <div className='main '>
      <Mobileheader />
      <Navbar />
      <div className='container admin-container  mt-3'>
        <div className='flex d-flex w-100  justify-content-between '><div><h5> <GiHand className='me-2' />Hi Dear</h5></div><div><p onClick={logoutUser}> <IoMdPower className='me-2' />Logout</p></div> </div>

        <div className='admin-cards-galary container-sm'>
          <h3>Upload new Image</h3>
          <div className='upload-div'>

          <div className="max-w-4xl mx-auto p-20 space-y-6">
              <label>
                <input
                  type="file"
                  hidden
                  onChange={({ target }) => {
                    if (target.files) {
                      const file = target.files[0]
                      setSelectedImage(URL.createObjectURL(file))
                      setSelectedFile(file)
                    }
                  }}
                />
                <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
                  {selectedImage ? (
                    <Image src={selectedImage} width={100} height={100} alt="" />
                  ) : (
                    <span>Select Image</span>
                  )}
                </div>
              </label>

              <button
                onClick={handleUpload}
                disabled={uploading}
                style={{ opacity: uploading ? ".5" : "1" }}
                className="bg-red-600 p-3 w-32 text-center rounded text-white"
              >
                {uploading ? "Uploading.." : "Upload"}
              </button>

            </div>
          </div>


          <h3>MY Uploads</h3>
          <div className='img-container'>
          {dirs.map(item => (
          
            <div key={item} className='img-card '>
               <img src={"/images/" + item} className="text-blue-500 hover:underline"/>
               <div className='bottom-section'>
               <div onClick={() => deleteItem( item)} className='deletebtn text-xxl' title='Delete'>X</div>
               </div>
            </div>
          ))}
          </div>


        </div>
      </div>
    </div>
  )
}



export const getServerSideProps = async () => {
  const props = { dirs: [] }
  try {
    const dirs = await fs.readdir(path.join(process.cwd(), "/public/images"))
    console.log(dirs)
    props.dirs = dirs
    return { props }
  } catch (error) {
    return { props }
  }
}
 

export default Admin