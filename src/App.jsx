import React from 'react'
import { useState, useEffect } from 'react'
import Player from './components/Player';


function App() {
  const [songs, setSong] = useState([
    {
      title: 'forget me',
      artist: 'Music Band',
      img_src: 'assetsimages',
      src: 'musicsombody.mp3',
    },
    {
      title: 'forget me',
      artist: 'Music Band',
      img_src: 'assetsimages',
      src: 'musicsombody.mp3',
    }
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

useEffect(() => {
  setNextSongIndex(()=>{
    if(currentSongIndex + 1 > songs.length -1 ){
      return 0; 
    }else{
      return currentSongIndex + 1;
    }
  })
}, [currentSongIndex]);


  return (
    <div className='App'>
        <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
        />      
    </div>
  )
}

export default App
