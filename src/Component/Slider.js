import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return (
    <div>
         <Carousel  autoPlay={true}
        infiniteLoop = {true}>
        <div>
          <img src="https://www.theindiatourism.com/images/goa-tour.jpg" alt="not found" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="https://www.theindiatourism.com/images/india-tourism.jpg" alt="not found" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src="https://www.theindiatourism.com/images/Golden-Triangle-India.jpg" alt="not found" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  )
}

export default Slider