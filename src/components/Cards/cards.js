import React from 'react';
import '../Cards/cards.scss'

function Card(props) {
  const { title, cover } = props;

  return (
    <div className="card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;

