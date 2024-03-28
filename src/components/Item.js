import React from 'react';
import '../styles/Item.scss';

function Item({ selectedAlbum }) {

    return (
        <li className='Item'>
            <h2>{selectedAlbum.name} ({selectedAlbum.year})</h2>
            <p>par <em>{selectedAlbum.band}</em></p>
            <img src={selectedAlbum.cover} alt={selectedAlbum.name} />
        </li>
    )
}

export default Item;