import React from 'react';
import songs from './songs';
import './playlist.css';

const Playlist = ({ onPlay }) => {
  const gana = songs.map((gana, index) => (
    <div key={index} className="gana">
      <button onClick={() => onPlay(index)}>
        <img src={gana.albumArt} alt={gana.title} className="ganaimg" />
        <audio className="songaudio" src={gana.song} preload="metadata" />
        <h3 className="songtitle">{gana.title}</h3> <br />
        <p className="songalbum">{gana.album}</p>
      </button>
    </div>
  ));

  return (
    <div className="playlist">
      <h2 className='rtal'>
      Playlist
      </h2>
      {gana}
    </div>
  );
};

export default Playlist;
