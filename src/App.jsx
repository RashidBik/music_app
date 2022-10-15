import React from 'react'
import { useState, useEffect } from 'react'
import Player from './components/Player';
import {data} from '../Data';
import List from './components/List';

function App() {
  const [songs, setSong] = useState(data);
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
        <List />
    </div>
  )
}

export default App
