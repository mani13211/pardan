import React, { useEffect } from 'react'
import Mobileheader from './components/mobileheader'
import Navbar from './components/navbar'
import router, { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';
import {RxCross2}  from 'react-icons/rx'
import mongoose from 'mongoose';
//import Collection from '../../models.js/Collection';
import { useState } from 'react'
import { GiHand } from 'react-icons/gi';

import { IoMdPower } from 'react-icons/io';
function Admin({ images }) {
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
  const [uploader, setuploader] = useState(null)
  const router = useRouter();

  const handleSubmit =async(e)=>{
    e.preventDefault()
    setuploader("1")
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "aqtlxzar");
    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dxmitb6h1/upload", {
        method: "POST", // or 'PUT'
        body: data,
      });
      
      const result = await response.json();
      
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
    setuploader(null)
    router.reload()
    }

    const deleteImg=async(id)=>{
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/delete`, {
          method: "POST", // or 'PUT'
          body: JSON.stringify(id),
        });
        const result=await response.json()
      
        console.log(result.message)
        router.reload()
    }
  return (
    <div className='main '>
      <Mobileheader />
      <Navbar />
      <div className='container admin-container  mt-3'>
        <div className='flex d-flex w-100  justify-content-between '><div><h5> <GiHand className='me-2' />Hi Dear</h5></div><div><p onClick={logoutUser}> <IoMdPower className='me-2' />Logout</p></div> </div>

        <div className='admin-cards-galary container-sm'>
          <h3>Upload new Image</h3>

          <form onSubmit={handleSubmit}>
            <input type="file" onChange={(e) => {
              setimage(e.target.files[0])
            }} />
            {image &&    (uploader ? <button className='btn btn-danger ' disabled>Uploading</button>: <button className='btn btn-danger '>Upload</button> ) } 
           
           
           
          </form>


          <h3>MY Uploads</h3>
          <div className='gallary mt-3'>
            {images.map((i, key) => {
              return <div key={key} className='pics' onClick={() => {deleteImg(i.title)}} >
                <Image src={i.image} width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: '100%' }} alt="" />
                  <RxCross2 className='icon'/>
                  
              </div>
            })}
          </div>

        </div>
      </div>
    </div>
  )
}




export async function getServerSideProps() {
  const apiKey = "746832252631631";
  const apiSecret = "tDnhvgJcthzeC9SnvLAyc2B0Dm4";
  const cloudName = "dxmitb6h1";

  const response = await fetch("https://api.cloudinary.com/v1_1/dxmitb6h1/resources/image", {
    method: "GET",
    headers: {
      Authorization: `Basic ${Buffer.from(apiKey + ':' + apiSecret).toString('base64')}`
    }
  }).then(r => r.json())
  const { resources } = response
  const images = resources.map(i => {
    const { width, height } = i
    return {
      id: i.asset_id,
      title: i.public_id,
      image: i.secure_url,
      width, height
    }
  })
  return {
    props: {
      images

    }

  }

}

export default Admin