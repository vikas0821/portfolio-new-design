import React from 'react'
import "./home.css"
import pic1 from "../assests/photo/IMG_0468.jpg"

function Home() {
  return (
    <div className="flex flex-wrap w-4/5 m-auto p-5 justify-center bg-black text-white mt-20">
        <div className='w-1/2'>
            <img className='w-full' src={pic1} alt="" />
        </div>
        <div className="flex flex-col gap-5 p-5 w-1/2">
        <h1 className="text-5xl">WELCOME </h1>
        <div className='mt-24'>
        <h1 className='text-3xl'>Hi, My Name is Vishwanath</h1>
        <h2 className='text-xl pt-2'>FULL STACK WEB DEVELOPER</h2>
        </div>
      </div>
    </div>
  )
}

export default Home