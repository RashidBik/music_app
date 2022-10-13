import React from 'react'
import { useState } from 'react'
import Player from './components/Player';


function App() {
  const [song, setSong] = useState([
    {
      title: 'forget me',
      article: 'Musci Band',
      img_src: './assets/images',
      src: './music/sombody.mp3',
    }
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(1);

  return (
    <div>
        <Player song={song[currentSongIndex]} nextSong={song[nextSongIndex]} />      
    </div>
  )
}

export default App
