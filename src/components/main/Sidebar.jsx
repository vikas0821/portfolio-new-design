import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='flex flex-col justify-evenly h-4/5 h- text-2xl text-left pl-5 text-white absolute top-4'>
    <Link to="/home"><div className=' bg-black w-48 rounded-lg pl-3 py-2'> <i class="fa-solid fa-house"></i> Home</div></Link> 
     <Link to="/about"><div className=' bg-black w-48 rounded-lg pl-3 py-2'> <i class="fa-solid fa-address-book"></i>About me</div></Link> 
     <Link to="/education"><div className=' bg-black w-48 rounded-lg pl-3 py-2'> <i class="fa-regular fa-school"></i>Education</div></Link> 
     <Link to="/projects"> <div className=' bg-black w-48 rounded-lg pl-3 py-2'><i class="fa-duotone fa-diagram-project"></i>Project</div></Link>
     <Link to="/skills"><div className=' bg-black w-48 rounded-lg pl-3 py-2'> <i class="fa-solid fa-address-book"></i>Skills</div></Link> 
     <Link to="/certificate"><div className=' bg-black w-48 rounded-lg pl-3 py-2'><i class="fa-duotone fa-file-certificate"></i>Certificates</div></Link> 
     <Link to="/contact"><div className=' bg-black w-48 rounded-lg pl-3 py-2'> <i class="fa-sharp fa-light fa-address-card"></i>Contact</div></Link> 
    </div>
  )
}

export default Sidebar
