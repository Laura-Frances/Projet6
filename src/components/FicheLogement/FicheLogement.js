import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import apartmentsData from '../Carrousel/jsonData.json';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Carrousel from '../Carrousel/Carrousel';
import Error from '../Error/Error';


function FicheLogement() {
  const { id } = useParams();
    const apartment = apartmentsData.find((apartment) => apartment.id === id); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 

  if (!apartment) {
    return <Error />;
  }

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? apartment.id.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === apartment.id.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div> 
       <Header />
       <Carrousel />
      <div className="carousel">
        <h2>{apartment.title}</h2>
      </div>
      <p>{apartment.description}</p>
      <Footer />
    </div>
  );
}

export default FicheLogement;
