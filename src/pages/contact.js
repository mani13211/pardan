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
    const [reminder, setreminder] = useState("d-none")
    const handleChange=(e)=>{
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


    const emailer =async(data)=>{
      try{
        let res= await fetch('https://formspree.io/f/xayzrero', {
          method: 'POST',
          body: JSON.stringify(data)
        })
        console.log(res.json())
        }

        catch(err){
          console.log(err)
        }

    }
    const handleSubmit=async(e)=>{
      const data={name:name,phone:phone,email:email,message:message}
            e.preventDefault() 
            emailer(data)
           
            try {
                
                const response = await fetch('/api/contact', {
                  method: 'POST',
                  body: JSON.stringify(data),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
            
                if (response.ok) {
                  console.log('done');
                } else {
                  console.error('Failed ');
                }
              } catch (error) {
                console.error('Error  image:', error);
              }
              setreminder("")
              setTimeout(() => {
                setreminder("d-none")
              }, 5000);

          // alert("We will contact u soon")
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

    <div className={`contact-wrapper m-4  ${reminder}`}> We will contact u soon</div>
        
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




            <button type="submit"  className=" btn submit-btn btn-block mb-4">Send</button>
            </form>

           
    </div>

   
      
    </div>
  )
}

export default Contact