import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='flex flex-col justify-evenly h-4/5 h- text-2xl text-left pl-5 text-white-100 absolute top-4'>
    <Link to="/home"><div className=' bg-extradarkcream-800 w-48 rounded-lg pl-3 py-2'> <i class="px-2 fa-solid fa-house"></i> Home</div></Link> 
     <Link to="/about"><div className=' bg-extradarkcream-800 w-48 rounded-lg pl-3 py-2'> <i class="px-2 fa-solid fa-address-book"></i>About me</div></Link> 
     <Link to="/education"><div className=' bg-extradarkcream-800 w-48 rounded-lg pl-3 py-2'> <i class="px-2 fa-solid fa-address-book"></i>Education</div></Link> 
     <Link to="/projects"> <div className=' bg-extradarkcream-800 w-48 rounded-lg pl-3 py-2'><i class="px-2 fa-solid fa-address-book"></i>Project</div></Link>
     <Link to="/skills"><div className=' bg-extradarkcream-800 w-48 rounded-lg pl-3 py-2'> <i class="px-2 fa-solid fa-address-book"></i>Skills</div></Link> 
     <Link to="/certificate"><div className=' bg-extradarkcream-800 w-48 rounded-lg pl-3 py-2'><i class="px-2 fa-solid fa-address-book"></i>Certificates</div></Link> 
     <Link to="/contact"><div className=' bg-extradarkcream-800 w-48 rounded-lg pl-3 py-2'> <i class="px-2 fa-solid fa-address-book"></i>Contact</div></Link> 
    </div>
  )
}

export default Sidebar
