import React, { useState, useEffect } from "react";
import web1 from"../../assests/photo/IMG_0468.jpg"
import web2 from"../../assests/photo/IMG_0468.jpg"
import web3 from"../../assests/photo/IMG_0468.jpg"
import web4 from"../../assests/photo/IMG_0468.jpg"
import "./slideshow.css";

const slides = [
    { id: 1, image: web1, alt: 'Image 1' },
    { id: 2, image: web2 , alt: 'Image 2' },
    { id: 3, image: web3 , alt: 'Image 3' },
    { id: 4, image: web4 , alt: 'Image 4' }
  ];
function Slideshow(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 3000); // transition every 3 seconds

    return () => clearInterval(intervalId);
  }, []); // run only once on mount

  return (
    <div className="img_slider" data-aos={props.dataAos} data-aos-duration={props.dataAosDuration}>
      <img src={slides[currentSlide].image} alt={`Slide ${currentSlide}`} />
    </div>
  );
}

export default Slideshow;
