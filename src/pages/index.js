import { Main } from 'next/document'
import Head from 'next/head'
import { useState } from 'react'
import Mobileheader from './components/mobileheader';
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
      
      
      <div className={model? "model open":"model"}>
        <img src={tempimgsrc}/>
        <ImCross onClick={(()=>{setmodel(false) ;settempimgsrc("")})}/>
      </div>
          <div className='main '>
            <Mobileheader/>
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
