import { useState } from 'react';
import '../styles/Player.scss';

function Player({ selectedAlbum }) {
    const [selectedTrack, setSelectedTrack] = useState(null);
    const [currentTrackTitle, setCurrentTrackTitle] = useState('');

    function selectTrack(track, title) {
        setSelectedTrack(track.file);
        setCurrentTrackTitle(title);
    }

    return (
        <div className='player'>

            {selectedAlbum.songs.map((track, index) => (
                <p className='song' key={track.id} onClick={() => selectTrack(track, track.name)}>
                    {index + 1}. {track.name} ({track.duration})
                </p>
            ))}

            {selectedTrack &&
                <figure className='control'>
                    <figcaption></figcaption>
                    <audio autoPlay controls src={selectedTrack}></audio>
                </figure>
            }
        </div>
    )
}

export default Player;

