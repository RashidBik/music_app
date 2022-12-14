import React,{useState, useRef, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart, faHeartCircleBolt} from '@fortawesome/free-solid-svg-icons'; 
import PlayerControl from './PlayerControl'
import PlayerDetail from './PlayerDetail'

const Player = (props) => {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [favor, setFavor] = useState(true);
    
    const favorite = () => {
      if(favor === true){
        setFavor(false);
      }else{
        setFavor( true);
      }
    }
  
    
    useEffect(() => {
      if (isPlaying){
        console.log(audioEl.current.play());
        audioEl.current.play();
      }else{
        audioEl.current.pause();
      }
    });

 const skipSong = (forwards = true) => {
  if(forwards){
    props.setCurrentSongIndex(() => {
      let temp = props.currentSongIndex;
      temp++;

      if(temp > props.songs.length - 1){
        temp = 0
      }
      return temp;
    });
  }else{
    props.setCurrentSongIndex(() => {
      let temp = props.currentSongIndex;
      temp--;

      if(temp < 0){
        temp = props.songs.length -1;
      }
      return temp;
    });
  }
 } 

  return (
    <div className='c-player'>
      <audio
        src={props.songs[props.currentSongIndex].src} 
        ref={audioEl} >
      </audio>
      <h4>
        {isPlaying ? 'Playing now': 'Paused'}
      <span className={favor ? 'redHeart': 'whiteHeart'} onClick={favorite}>
     <FontAwesomeIcon  icon={favor ? faHeart: faHeartCircleBolt} /> 
      </span>
      </h4>
      <PlayerDetail 
        props={props.songs[props.currentSongIndex]}
       />
      <PlayerControl
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
       />
      <p><strong>Next Up:</strong>
        {props.songs[props.nextSongIndex].title}
        {' '} by {' '}
        {props.songs[props.nextSongIndex].artist} 
      </p>
    </div>
  )
}

export default Player
