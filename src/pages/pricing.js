import React from 'react'
import Navbar from './components/navbar'
import Mobileheader from './components/mobileheader'
import { BsCheck2All } from 'react-icons/bs';

function Pricing() {
  return (
    <div className='main '>
    <Mobileheader/>
    <Navbar/>
    <div className='pricing-section'>
        <h2 className='mt-3'>Pricing</h2>
        <div className='card container-md mt-5'>
            <div className='row p-3'>
                <div className='col-md-4'>
                    <div className='card'>
                            <div className="card-body text-center">
                               <p className='mb-1'>Standard</p>
                               <h1>₹500</h1>
                               <img className='card-innerimage img-fluid mb-5' src="standard.png"/>
                               <p className='mb-0'><b>10-15 </b>days </p>
                               <p className='mb-0'><b>A4</b> size paper</p>
                               <p className='mb-0 mb-5'><b>Unfold</b> Paper delivery</p>
                               <button className='btn m-auto pring-btns  '>Book Now</button>
                            </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                            <div className="card-body text-center">
                               <p className='mb-1'> Premium</p>
                               <h1>₹500</h1>
                               <img className='card-innerimage img-fluid mb-5' src="fast.png"/>
                               <p className='mb-0'><b>5-10 </b>days </p>
                               <p className='mb-0'><b>A4</b> size paper</p>
                               <p className='mb-0 mb-5'><b>Unfold</b> Paper delivery</p>
                               <button className='btn m-auto pring-btns  '>Book Now</button>
                            </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className=''>
                            <div className="card-body">
                              <p><b>Each Pack Includes</b></p>

                                <ul>
                                    <li><BsCheck2All/> <span className='ms-2'>On time delivery</span></li>
                                    <li><BsCheck2All/> <span className='ms-2'>Unfold paper  delivery</span></li>
                                    <li><BsCheck2All/> <span className='ms-2'>Use of good ink/pencils</span></li>
                                    <li><BsCheck2All/> <span className='ms-2'>Lamination of paper</span></li>
                                    <li><BsCheck2All/> <span className='ms-2'>Worth of your investment </span></li>
                                    
                                    
                                </ul>
                                <div className='mycard d-flex mt-5 mb-3 '>
                                    <div className='img-div'>
                                        <img src='fast.png'/>
                                    </div>
                                    <div>
                                        <h4>{process.env.NEXT_PUBLIC_sitename}</h4>
                                        <p>Fell free to  choose me as your sketch artist </p>
                                    </div>
                                </div>
                                <p className='text-center'>Still have any doubts in mind?<br/>
                                  <i className='text-sm'>Contact Us</i> 
                                </p>
                                
                              </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Pricing