import React, { useState, useEffect } from 'react';
import './Morty.css';

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div>
      <h1 className="title">Rick and Morty Characters</h1>
      <div className="grid">
        {characters.map((character) => (
          <div key={character.id} className="card">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p><strong>Status:</strong> {character.status}</p>
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Origin:</strong> {character.origin.name}</p>
            <p><strong>Location:</strong> {character.location.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickAndMorty;
