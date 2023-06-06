import React from 'react'
import {Routes ,Route } from "react-router-dom";
import Sidebar from './main/Sidebar'
import Home from "./header/Home"
import About from './header/About';
import Education from './main/education/Education';
import Projects from "./main/projects/Projects"
import Abilities from "./main/Abilities/Abilities"
import Contact from "./main/Contact/Contact"
import Certificate from "./main/Certification/Certificate"


function Switch() {
  return (
    <div className="flex h-screen bg-cream-200">
     <div className="w-80 h-full ">
        <Sidebar />
     </div>
     
        <div className="flex-grow h-full" >
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/education" element={<Education/>}></Route>
        <Route path="/skills" element={<Abilities/>}></Route>
        <Route path="/certificate" element={<Certificate/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
     </Routes>
     </div>
     
    </div>
  )
}

export default Switch
