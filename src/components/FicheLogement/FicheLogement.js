import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import apartmentsData from '../Carrousel/jsonData.json';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Carrousel from '../Carrousel/Carrousel';
import Error from '../Error/Error';
import MenuItem from '../Hooks/MenuItem';
import '../FicheLogement/FicheLogement.scss';

function FicheLogement() {
  const { id } = useParams();
  const apartment = apartmentsData.find((apartment) => apartment.id === id);
  const [] = useState(0);

  if (!apartment) {
    return <Error />;
  }

  return (
    <div className='FicheLogement'>
      <Header />
      <Carrousel />

      <div className='Titles'></div>
      <h2 className='title'>{apartment.title}</h2>
      <p className='location'>{apartment.location}</p>

      <div className='Host'>

      </div>

      <div className='Rate'>
        <div className={apartment.rating}>
        </div>
      </div>

      <div className='tags'>{apartment.tags.map((tag, index) => (
        <span className='name-tag' key={index}>{tag}</span>
      ))}</div>

<div className='frames'>
      <div className='barre-description'>
        <MenuItem className='LogementMenu' title="Description" content={<p className='description'>{apartment.description}</p>} />
      </div>

      <div className='barre-equipements'>
      <MenuItem className='LogementMenu' title="Equipements" content={<p className='description'>
        {apartment.equipments.map(equipment => <span className='eachEquipment'>{equipment}</span>)}</p>} />      
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FicheLogement;
