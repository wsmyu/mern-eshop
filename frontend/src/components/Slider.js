import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';

function Slider  () {
    
     const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div style={{ margin:'auto'}}>
        <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: "100%", maxWidth: "100%" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide1}
              alt="First slide"
            />
          
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide2}
              alt="Second slide"
            />
    
        
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide3}
              alt="Third slide"
            />

          </Carousel.Item>
      
        </Carousel>
    </div>
    );
  }
export default Slider
