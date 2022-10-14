import React from 'react'
import { useState } from 'react'
import Player from './components/Player';


function App() {
  const [song, setSong] = useState([
    {
      title: 'forget me',
      artist: 'Music Band',
      img_src: 'assetsimages',
      src: 'musicsombody.mp3',
    }
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className='App'>
        <Player song={song[currentSongIndex]} nextSong={song[nextSongIndex]} />      
    </div>
  )
}

export default App
