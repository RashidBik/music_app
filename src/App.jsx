import React from 'react'
import { useState, useEffect } from 'react'
import Player from './components/Player';


function App() {
  const [songs, setSong] = useState([
    {
      title: 'TOEFL LESSON 1',
      artist: 'Music Band',
      img_src: '/images/flare.jpg',
      src: '/music/TOEFLPod3.mp3',
    },
    {
      title: 'TOEFL LESSON 2',
      artist: 'HERN JONATAN',
      img_src: '/images/wall.jpg',
      src: '/music/TOEFL001.mp3',
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
        {/* <audio controls src="./public/music/TOEFL001.mp3">audio</audio>   */}
    </div>
  )
}

export default App
