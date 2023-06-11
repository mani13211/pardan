import React from 'react'
import { ImPencil2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import Link from 'next/link';

function Mobileheader() {
  return (
    <div className='mobileheader pt-1'>
         <div className='logo'>
                <ImPencil2 className='me-2'/>
                <i className="bi bi-palette"></i><span>RKDraws</span>
                {/* <Link className="insta_a" href="https://www.instagram.com/smile.draws/"><BsInstagram /></Link> */}
           </div>
    </div>
  )
}

export default Mobileheader