import '../styles/App.scss';
import Gallery from './Gallery.js';
import Item from './Item.js';
import Home from './Home.js';
import Player from './Player.js';
import React, { useState } from 'react';

// import router from '../router';
// import { RouterProvider } from 'react-router-dom';

function App() {

  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  return (

    // <RouterProvider router={router} /> 

    <div>
      <Gallery handleAlbumClick={handleAlbumClick} />

      <div>
        {selectedAlbum ?
          <div className='jukebox'>
            <Item selectedAlbum={selectedAlbum} />
            <Player selectedAlbum={selectedAlbum} />
          </div> :
          <Home />
        }
      </div>

    </div>
  );
}

export default App;