
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import apartmentData from '../Data/jsonData.json';
import Error from '../Error/Error';
import '../Carrousel/Carrousel.scss';

function Carrousel() {
  const { id } = useParams(); // on extrait la valeur de l'URL correspondant au paramètre id
  const apartment = apartmentData.find((apartment) => apartment.id === id); // on recherche l'appartement correspondant à l'ID extrait de l'URL avec 'find'
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // état initialisé à 0

  if (!apartment) {
    return <Error /> // page d'erreur 404 renvoyée
  }

  const totalImages = apartment.pictures.length; // calcule le nombre d'img pour l'appartement
  const handleNextImage = () => { // fonction est appelée lors du clic sur la flèche suivante
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePrevImage = () => { // fonction est appelée lors du clic sur la flèche précédente
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

export default Carrousel;;
