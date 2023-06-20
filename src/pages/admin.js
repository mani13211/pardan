import React, { useEffect } from 'react'
import Mobileheader from './components/mobileheader'
import Navbar from './components/navbar'
import router, { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import mongoose from 'mongoose';
import { useState } from 'react';
import { GiConsoleController, GiHand } from 'react-icons/gi';

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
  const [model, setmodel] = useState("close")
  const [delimg, setdelimg] = useState("")
  const [imgsrr, setimgsrc] = useState("")
  const router = useRouter();

  const handleSubmit = async (e) => {
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

  const deleteImg = async (id) => {
    console.log(id)
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/delete`, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(id),
    });
    const result = await response.json()

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

          <form onSubmit={handleSubmit} className=' mb-3 mt-3 d-flex align-items-center'>
            <input type="file" onChange={(e) => {
              setimage(e.target.files[0])
            }} />
            {image && (uploader ? <button className='btn btn-danger ' disabled>Uploading</button> : <button className='btn btn-danger '>Upload</button>)}
          </form>
          <h3>MY Uploads</h3>
          <div className='gallaryad row  mt-3'>
            {images.map((i, key) => {
              return <div key={key} className=' pics col-6 col-sm-6 col-lg-4 col-xl-3 '  >
                <div className='card'>
                  <Image src={i.image} width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%' }} alt="" />

                  {/* <button className='btn btn-danger'>Delete</button> */}
                  <div class="dropdown">
                    <BiDotsVerticalRounded className='icon' type="button" data-bs-toggle="dropdown" aria-expanded="false" />
                    <ul class="dropdown-menu">

                      <li><a class="dropdown-item" onClick={ (()=>{
                        
                        setmodel("open")
                          setimgsrc( i.image)
                        setdelimg(i.title)

                      }) }>Delete</a></li>
                    </ul>
                  </div>


                </div>
              </div>
            })}
          </div>
        </div>
      </div>
      <div className={`modeladmin ${model}`}>
        <div className='modal-context'>
          <div className='header'>Delete this picture</div>
          <div className='body'><img src={imgsrr} /></div>
          <div className='footer'> <button className='btn btn-danger ms-2 me-2' onClick={(()=>{
            console.log(delimg)
            deleteImg(delimg)
          })} >Delete</button>  <button className='btn btn-secondary ms-2 me-2' onClick={(() => { setmodel("close") })} >Cancel</button></div>
        </div>
      </div>
    </div>



  )
}




export async function getServerSideProps() {
  const apiKey = "746832252631631";
  const apiSecret = "tDnhvgJcthzeC9SnvLAyc2B0Dm4";
  const cloudName = "dxmitb6h1";

  const response = await fetch("https://api.cloudinary.com/v1_1/dxmitb6h1/resources/image?max_results=1000", {
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