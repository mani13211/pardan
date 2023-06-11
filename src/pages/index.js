import { Main } from 'next/document'
import Head from 'next/head'
import { useState } from 'react'
import {ImCross} from 'react-icons/im';
import Navbar from './components/navbar'
import img1 from "../sample_images/1.jpg"
import img2 from "../sample_images/2.jpg"
import img3 from "../sample_images/3.jpg"
import img4 from "../sample_images/4.jpg"
import img5 from "../sample_images/5.jpg"
import img6 from "../sample_images/1.jpg"
import img7 from "../sample_images/2.jpg"
import img8 from "../sample_images/3.jpg"
import img9 from "../sample_images/4.jpg"
import img10 from "../sample_images/5.jpg"


export default function Home() {
  let data= [{
    id:1,
    imgsrc:img1
  },{
    id:2,
    imgsrc:img2
  },{
    id:3,
    imgsrc:img3
  },{
    id:4,
    imgsrc:img4
  },{
    id:5,
    imgsrc:img5
  },{
    id:6,
    imgsrc:img1
  },{
    id:7,
    imgsrc:img2
  },{
    id:8,
    imgsrc:img3
  },{
    id:9,
    imgsrc:img4
  },{
    id:10,
    imgsrc:img5
  }


]
    
const [model, setmodel] = useState(false)
const [tempimgsrc, settempimgsrc] = useState('')
const getImage=(imgscr)=>{
  settempimgsrc(imgscr)
  setmodel(true)
}
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link href="https://fonts.googleapis.com/css2?family=Euphoria+Script&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
        </Head>
      
      <div className={model? "model open":"model"}>
        <img src={tempimgsrc}/>
        <ImCross onClick={()=>{setmodel(false)}}/>
      </div>
          <div className='main '>
            <Navbar/>
            <div className='gallary'>
              {data.map((item,index)=>{
                return(
                  <div className='pics' key={index} onClick={()=>getImage(item.imgsrc.src)}>
                  <img src={item.imgsrc.src} style={{width:"100%"}}/>
                </div>
                

              )
              
                
              })}
            </div>
            
          </div>
   
        


    </>
  )
}
