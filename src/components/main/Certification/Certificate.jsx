import React from 'react'
import "./certificate.css"
import Slideshow from './Slideshow'

function Certificate() {
  return (
    <section className="w-4/5 mt-11 bg-darkcream-400 p-5 justify-center text-white-200 overflow-y-auto border-8 border-white-100">
        <h1 className="text-3xl pb-5 font-bold text-white-100 text-center" >CERTIFICATES</h1>
        <Slideshow />
    </section>
  )
}

export default Certificate
