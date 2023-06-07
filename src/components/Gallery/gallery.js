import React from 'react';
import Card from '../Cards/cards';
import data from '../Gallery/cardsData.json'
import '../Gallery/gallery.scss'

function Gallery() {
    return (
      <div className="gallery">
        {data.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            cover={card.cover}
          />
        ))}
      </div>
    );
  }
  
  export default Gallery;
