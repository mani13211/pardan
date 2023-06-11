import React from 'react'
import { ImPencil2 } from 'react-icons/im';

function Mobileheader() {
  return (
    <div className='mobileheader pt-1'>
         <div className='logo'>
                <ImPencil2 className='me-2'/>
                <i className="bi bi-palette"></i><span>RKDraws</span>
           </div>
    </div>
  )
}

export default Mobileheader