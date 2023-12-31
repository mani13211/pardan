import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    
    <div className='navbar'>
        <ul>
         <Link href="/">   <li>Portifolio</li></Link>
         
            <Link href="pricing">  <li>Pricing</li></Link>
            <Link href="contact">  <li>Contact US</li></Link>
            <Link href="about"><li>About ME</li></Link>
        </ul>
         </div>
  )
}

export default Navbar