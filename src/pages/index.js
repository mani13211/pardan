import { Main } from 'next/document'
import Head from 'next/head'
import { useState } from 'react'
import Mobileheader from './components/mobileheader';
//import Collection from '../../models.js/Collection'
import path from "path";
import {ImCross} from 'react-icons/im';
import Image from 'next/image';
import fs from "fs/promises"
import mongoose from 'mongoose';
import Navbar from './components/navbar'


const Home=({dirs})=> {

    
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
{/*              
              {data.map((i,index)=>{
                return(
                  <div className='pics' key={index} onClick={()=>getImage(i.img_path)}>
                  <Image src={i.img_path}  width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}    alt= "" />
                </div>
              
              )
              
                
              })} */}
               {dirs.map(item => (

                  <div className='pics' key={item} onClick={()=>getImage("/images/" + item)}>
                  <Image src={"/images/" + item} width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}    alt= "" />
                  </div>
                            
        
        ))}

            </div>
            
          </div>
   
        


    </>
  )
}
// export async function getServerSideProps(context) {
//   if(! mongoose.connections[0].readyState){
//     await mongoose.connect("mongodb+srv://paymentsetup:9815897261@cluster0.xayu3wr.mongodb.net/")
//   }
//   const collection = await Collection.find({})
 
//   return { props:{data:JSON.parse(JSON.stringify(collection)) }}
// }


export const getServerSideProps = async (context) => {

  const props = { dirs: [] }
  try {
    const dirs = await fs.readdir(path.join(process.cwd(), "/public/images"))
    console.log(dirs,"i m dirs")
    props.dirs = dirs
    return { props }
  } catch (error) {
    return { props }
  }
}
 
export default  Home