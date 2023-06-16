import React from 'react';
import '../Cards/cards.scss'
import { Link } from 'react-router-dom';

function Card(props) {
  const { title, cover, route } = props;

  return (
    <Link to="/logements" className="card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}

export default Card;

