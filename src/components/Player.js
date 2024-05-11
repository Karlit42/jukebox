import { useState } from 'react';
import '../styles/Player.scss';

function Player({ selectedAlbum }) {
    const [selectedTrack, setSelectedTrack] = useState(null);

    function selectTrack(track, title) {
        setSelectedTrack(track.file);
    };

    const styleP = {
        backgroundColor: selectedAlbum.backgroundkolor,
        color: selectedAlbum.kolor,
    };

    return (
        <div className='player'>
            {selectedAlbum.songs.map((track, index) => (
                <p className='song' style={styleP} key={track.id} onClick={() => selectTrack(track, track.name)}>
                    {index + 1}. {track.name} ({track.duration})
                </p>
            ))}
            {selectedTrack &&
                <figure className='control'>
                    <audio autoPlay controls src={selectedTrack}></audio>
                </figure>
            }
        </div>
    )
}

export default Player;

