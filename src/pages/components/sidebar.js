import React from 'react'
import { ImPencil2 } from 'react-icons/im';
import Link from 'next/link';
function Sidebar() {
  return (
        <div className='sidebar'>
           <div className='logo'>
                <ImPencil2 className='me-2'/>
                <i className="bi bi-palette"></i><span>SmileDraws</span>
           </div>
           <div className='mid-section'>
                    <p className='mb-1'> Your Artist</p>
                    <h2>Smile Sardarni</h2>
           </div>
           <div className='bottom-section'>
            <Link href="https://www.instagram.com/smile.draws/">Instagram</Link>
           </div>
        </div>
  )
}

export default Sidebar