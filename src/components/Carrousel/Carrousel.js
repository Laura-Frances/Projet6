
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import apartmentsData from '../Carrousel/jsonData.json';
import Error from '../Error/Error';
import '../Carrousel/Carrousel.scss';



function ApartmentPage() {
  const { id } = useParams();
  const apartment = apartmentsData.find((apartment) => apartment.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!apartment) {
    return <Error />
  }

  const totalImages = apartment.pictures.length;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };
  return (
    <div>
      <div className="carousel">
        <div className="carousel-image-container">
          <img
            className="carousel-image"
            src={apartment.pictures[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
          />
          <div className="navigation">
            <div
              className="carousel-navigation arrow-left"
              onClick={handlePrevImage}>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div
              className="carousel-navigation arrow-right"
              onClick={handleNextImage}>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>

          {apartment.pictures.length > 1 && (
            <div className='numbering'>
              <div className={`number ${currentImageIndex === 0 ? 'active' : ''}`}>
                {`${currentImageIndex + 1}/${apartment.pictures.length}`}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ApartmentPage;;
