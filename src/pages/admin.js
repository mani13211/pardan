import React, { useEffect } from 'react'
import Mobileheader from './components/mobileheader'
import Navbar from './components/navbar'
import router,{useRouter} from 'next/router';
import Image from 'next/image'
import mongoose from 'mongoose';
import Collection from '../../models.js/Collection';
import { useState } from 'react'
import { GiHand } from 'react-icons/gi';
import { IoMdPower } from 'react-icons/io';
function Admin({data}) {
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

  const handleChange = async (e) => {
    setimage(e.target.value)

    const file = e.target.files[0];
    let reader = new FileReader();
    await reader.readAsDataURL(file);

    reader.onload = () => {
      var dataURL = reader.result;
      setout(dataURL)


    }
    reader.onerror = error => {
      console.log("error is:", error)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { img_path: out }
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/upload`, {
      method: "POST", 
      api: {
        bodyParser: {
          sizeLimit: '4mb' 
        }
      },
      headers: {
        "Content-Type": "application/json",
      },

      bodyParser: {
        sizeLimit: '4mb'
      }
      ,
      body: JSON.stringify(data),
    });
    alert("we recived image")
   
   
    router.reload();

    


  }
  const deleteItem=async(id)=>{
    let id1=parseInt(id)
    //console.log("gettingit ",id1)
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/delete`, {
      method: "POST", 
     
      bodyParser: {
        sizeLimit: '4mb'
      }
      ,
      body: JSON.stringify(id1),
    });
    let res= await response.json()
    router.reload();
    

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
            <form onSubmit={handleSubmit}>

              <input name="img_path"
                onChange={handleChange}
                value={image}
                type="file"
                accept="image/png, image/gif, image/jpeg" />
              {out && <img className='preview-img' alt= "preview-img"src={out} /> }
              
              <button className="btn btn-danger">Submit</button>
            </form>
          </div>


          <h3>MY Uploads</h3>
          <table className=' mb-5 w-100 mytable'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Created on</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              
            
                {data.map((i,index)=>{
                  return (  <tr key={index}>
                    <td><div className='mycard d-flex '>
                      <div className='img-div'>
                     
                        <Image
                           src={i.img_path}
                            alt={i._id}
                            width={200}
                            height={200}
                          />
                      </div>
                      <div>
                        <h4>RK Sharama</h4>
                        <p>Fell free to  choose me as your sketch artist </p>
                      </div>
                    </div>
                    </td>
                    <td>Created on</td>
                    <td><button className='btn-danger btn' onClick={(()=>{
                      deleteItem(i.id)

                    })}>Delete</button></td>
                  </tr>)

               })}
                
             
            </tbody>
          </table>


        </div>
      </div>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   // Fetch data from external API
//   //   if(! mongoose.connections[0].readyState){
// //     await mongoose.connect("mongodb+srv://paymentsetup:9815897261@cluster0.xayu3wr.mongodb.net/")
// //   }
//   const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/data`)
//   const data = await res.json()
 
//   // Pass data to the page via props
//   return { props: { data } }
// }
 
export async function getServerSideProps(context) {
  if(! mongoose.connections[0].readyState){
    await mongoose.connect("mongodb+srv://paymentsetup:9815897261@cluster0.xayu3wr.mongodb.net/")
  }
  const collection = await Collection.find({})
  console.log(collection)
 
  return { props:{data:JSON.parse(JSON.stringify(collection)) }}
}
 

export default Admin