import React from 'react'
import { useState,useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import router from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import Mobileheader from './components/mobileheader'
import Navbar from './components/navbar'
function Login() {
    useEffect(() => {
        if(localStorage.getItem("protfolio-token")){
          router.push("/admin")
        }
      
      
      }, [])

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const handlesubmit = async (e) => {
        e.preventDefault()
        let data = { email: email, password: password }
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            let res = await response.json()
            if(res.success==true){
                localStorage.setItem("protfolio-token", res.token);
                toast.success(res.message, {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    setemail("")
                    setpassword("")
    
                    setTimeout(() => {
                        router.push(`${process.env.NEXT_PUBLIC_HOST}/admin`)
                      }, 1000);
    
            }else{
                toast.error(res.message, {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
    
    
            }

        }catch(error) {
            alert("some techinacal erros")
            
                console.error(error);

        }
        
       // console.log(res)
       

    }
    const handleChange = (e) => {
        if (e.target.name == "email") {
            setemail(e.target.value)
        }
        else if (e.target.name == "password") {
            setpassword(e.target.value)
        }
    }


    return (
        <div className='main '>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <Mobileheader />
            <Navbar />
            <div className='container login-container
            form-signin w-100 m-auto"'>
                <form className='' onSubmit={handlesubmit}>
                    <p className='Logo'>SmileDraws</p>
                    <h1 className="h3 mb-3 fw-normal">Please Login in</h1>

                    <div className="form-floating mb-3">
                        <input value={email} onChange={handleChange} name="email" type="email" className="form-control" id="email" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={password} onChange={handleChange} type="password" name="password" className="form-control" id="password" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>


                    <button className="btn btn-danger w-100 py-2" type="submit"> Login</button>
                    <p className="mt-5 mb-3 text-body-secondary">© Copyright by SmileDraws</p>
                </form>

            </div>

        </div>
    )
}

export default Login