import React from 'react';
import Card from '../Cards/cards';
import apartment from '../Data/jsonData.json';
import '../Gallery/gallery.scss';

function Gallery() {
  return (
    <div className="gallery">
      {apartment.map((apartment) => (
        <Card
          key={apartment.id}
          id={apartment.id}
          title={apartment.title}
          cover={apartment.cover}
        />
      ))}
    </div>
  );
}

export default Gallery;
