import React from 'react';
import './Card.css';

const Card = ({ character }) => (
  <div className="card" style={{ width: '18rem', margin: '1rem' }}>
    <img 
      src={character.image} 
      className="card-img-top" 
      alt={character.name} 
      style={{ height: '200px', objectFit: 'cover' }}
    />
    <div className="card-body">
      <h5 className="card-title">{character.name}</h5>
      <p className="card-text">
        <strong>Status:</strong> {character.status}<br />
        <strong>Species:</strong> {character.species}<br />
        <strong>Gender:</strong> {character.gender}<br />
        <strong>Origin:</strong> {character.origin.name}<br />
        <strong>Location:</strong> {character.location.name}
      </p>
      <a 
        href={character.url} 
        className="btn btn-primary" 
        target="_blank" 
        rel="noreferrer"
      >
        Ver detalles
      </a>
    </div>
  </div>
);

export default Card;
