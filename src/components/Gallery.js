import React from 'react';
import '../styles/Gallery.scss';
import { albums } from '../assets/datas/albums';

const Gallery = ({ handleAlbumClick }) => {
  return (
    <div className="card-container">
      {albums.map((album) => (
        <img
          key={album.id}
          className='card'
          src={album.cover}
          alt={album.name}
          onClick={() => handleAlbumClick(album)}
        />
      ))}
    </div>
  );
};

export default Gallery;