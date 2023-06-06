import React from 'react'
import Navbar from "./Navbar"

function About() {
    return (
        <div className=" flex flex-col gap-10 w-4/5 p-5 justify-center text-extradarkcream-800 bg-white-100 font-bold  mt-20 border-8 border-extradarkcream-800  ">
            <div className='flex flex-col gap-5'>
                <h2 className="text-3xl text-center font-bold">Hello Everyone!</h2>
                <h2 className='text-3xl'>My name is Vishwanath. I'm MERN Stack Developer</h2>
                <h2 className='text-xl'>I'm from Yadgir Karnataka.
                    I graduated in Mechanical Engineering from New Horizon College of Engineering.
                </h2>
                <p className='text-xl'>My hobbies are Reading news-paper, Listning music, Travelling, playing games etc..</p>
            </div>
            <div >
                <Navbar />
            </div>
            
        </div>
    )
}

export default About