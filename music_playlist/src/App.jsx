import React, { useState } from 'react';
import Playlist from './components/playlist.jsx';
import Playing from './components/playing.jsx';
import Header from './components/header.jsx';
import './App.css'
import songs from './components/songs';

const App = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const handlePlay = (index) => {
    setCurrentSongIndex(index);
  };

  return (

    <div className="block">

      <div className="head">
        <Header/>
      </div>
    <div className='flex'>


      
      <div className="playing">
      <Playing songs={songs} currentSongIndex={currentSongIndex} />
      </div>

      <div className="playlist">
      <Playlist onPlay={handlePlay} />
      </div>


    </div>
    </div>
    
  );
};

export default App;
