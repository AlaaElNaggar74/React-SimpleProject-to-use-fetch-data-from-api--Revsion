
import imageo from './beach_resorts-wide.jpg'
import imaget from './beautiful_green_landscape-wide.jpg'
import imageth from './sailing_over_indian_ocean-wide.jpg'

import "./slider.css"

const Sliderr = () => {
  return (
    <div className="slider">
       <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imageo} className="d-block w-100 h500" alt="..."  />
          </div>
          <div className="carousel-item">
            <img src={imaget} className="d-block w-100 h500" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imageth} className="d-block w-100 h500" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Sliderr;
