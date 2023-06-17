import { Main } from 'next/document'
import Head from 'next/head'
import { useState } from 'react'
import Mobileheader from './components/mobileheader';
//import Collection from '../../models.js/Collection'
import path from "path";
import {ImCross} from 'react-icons/im';
import Image from 'next/image';
import mongoose from 'mongoose';
import Navbar from './components/navbar'


const Home=({images})=> {

    
const [model, setmodel] = useState(false)
const [tempimgsrc, settempimgsrc] = useState('')
const getImage=(imgscr)=>{
  settempimgsrc(imgscr)
  setmodel(true)
}
  return (
    <>
      <div className={model? "model open":"model"}>
        <img src={tempimgsrc}/>
        <ImCross onClick={(()=>{setmodel(false) ;settempimgsrc("")})}/>
      </div>
          <div className='main '>
            <Mobileheader/>
            <Navbar/>
            <div className='gallary mt-3'>
            {images.map((i,key)=>{
                  return  <div key={key} className='pics' onClick={()=>getImage(i.image)} >
                <Image  src={i.image}  width={0} 
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}    alt= "" />
                </div>
                })}
            </div>
          </div>
    </>
  )
}

export async function getServerSideProps() {
  const apiKey = "746832252631631";
  const apiSecret = "tDnhvgJcthzeC9SnvLAyc2B0Dm4";
  const cloudName = "dxmitb6h1";
  
  const response = await fetch("https://api.cloudinary.com/v1_1/dxmitb6h1/resources/image", {
    method: "GET",
    headers: {
      Authorization:  `Basic ${Buffer.from(apiKey+':'+apiSecret).toString('base64') }`
     }} ).then(r=>r.json())
     const {resources}=response
     const images= resources.map(i=>{
      const {width,height}=i
      return{
        id:i.asset_id,
        title:i.public_id,
        image:i.secure_url,
        width,height
      }
     })
     return {
      props:{
        images

      }
      
     }

}
export default  Home