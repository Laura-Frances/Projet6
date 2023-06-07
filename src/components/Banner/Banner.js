import React from 'react';
import bannerImage from '../Banner/img/backgroundBanner.png'
import '../Banner/Banner.scss'

function Banner() {
    return (
        <div className="banner">
            <img src={bannerImage} alt="banner" className="banner" /> 
      </div>
    )
}

export default Banner;