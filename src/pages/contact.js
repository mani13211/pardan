import React from 'react'
import Mobileheader from './components/mobileheader';
import Navbar from './components/navbar';
import { useState } from 'react';
function Contact() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [message, setmessage] = useState("")
    const [disable, setdisable] = useState(true)
   
        // Code that requires access to the document object
       
    const handleChange=(e)=>{
        // if(name>4 && email>7 && phone>10 && message>4){
        //     setdisable(false)
        //    }else{
        //        setdisable(true)
        //    }
        if(e.target.name=="name"){
            setname(e.target.value)
        }
        else if(e.target.name=="email"){
            setemail(e.target.value)
        }
        else if(e.target.name=="phone"){
            setphone(e.target.value)
        }
        else if(e.target.name=="message"){
            setmessage(e.target.value)
        }
      
    }
    const handleSubmit=(e)=>{
        console.log("my working")
            e.preventDefault() 
           alert("We will contact u soon")
            setname("")
            setemail("")
            setphone("")
            setmessage("")
           
    }
    
  return (
    <div className='main '>
    <Mobileheader/>
    <Navbar/>
    <div className='container'>
        
    <form className='p-3' onSubmit={handleSubmit}>
    <h4  className='mb-3'>Fill Your Details </h4>
            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="name">Name</label>
                <input type="text"  onChange={handleChange}  value={ name}  name="name" id="name" className="form-control" />
            </div>


            <div className="form-outline mb-4">
            <label className="form-label"htmlFor="email">Email address</label>
                <input type="email"  onChange={handleChange}  value={ email}  name="email" id="email" className="form-control" />
            </div>
            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="phone">Phone</label>
                <input  onChange={handleChange}  value={phone}  type="tel" name="phone" id="phone" className="form-control" />
            </div>


            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="message">Message</label>
                <textarea onChange={handleChange} value={message}  name="message" className="form-control" id="message" rows="4"></textarea>

            </div>




            <button type="submit"  className="btn submit-btn btn-block mb-4">Send</button>
            </form>
    </div>
      
    </div>
  )
}

export default Contact