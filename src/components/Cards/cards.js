import React from 'react';
import '../Cards/cards.scss'
import { Link } from 'react-router-dom';


function Card(props) {
  const { id, title, cover } = props;

  return (
    <Link key={id} to={`/apartment/${id}`} className="card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}

export default Card;

