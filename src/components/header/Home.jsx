import React from 'react'
import "./home.css"
import pic1 from "../assests/photo/IMG_0468.jpg"

function Home() {
  return (
    <div className="flex flex-wrap w-4/5  p-5 justify-center bg-white-100 text-white-200 mt-11">
        <div className='w-1/2  border-4 border-extradarkcream-800 '>
            <img className='w-full' src={pic1} alt="" />
        </div>
        <div className="flex flex-col gap-8 font-bold text-extradarkcream-800 p-5 w-1/2">
        <h1 className="text-6xl">WELCOME </h1>
        <h1 className="text-6xl">TO</h1>
        <h1 className="text-6xl">MY</h1>
        <h1 className="text-6xl">PORTFOLIO</h1>
      </div>
    </div>
  )
}

export default Home