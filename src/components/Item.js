import React from 'react';
import '../styles/Item.scss';

function Item({ selectedAlbum }) {

    return (
        <div className='item'>
            <h1>{selectedAlbum.name} ({selectedAlbum.year})</h1>
            <p>par <span>{selectedAlbum.band}</span></p>
            <img src={selectedAlbum.cover} alt={selectedAlbum.name} />
        </div>
    )
}

export default Item;