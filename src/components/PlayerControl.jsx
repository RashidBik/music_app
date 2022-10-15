import React from 'react'
import {FontAwesomeIcon} from 'react-fontawesome';
// import { faPlay, faPause, faForward, faBackward} from 'react-fontawesome'; 
const ls = { faPlay:'s', faPause:'p', faForward:'h', faBackward:'i'}
const PlayerControl = (props) => {
    return (
    <div className='c-player--controls'>
        <button className='skip-btn' 
        onClick={()=> props.skipSong(false)}>
            {/* <FontAwesomeIcon 
            icons={faBackward} /> */}
            BACK
        </button>
        <button 
        className='play-btn' 
        onClick={()=> props.setIsPlaying(!props.isPlaying)}>
            {/* <FontAwesome 
            icons={props.isPlaying ? faPause : faPlay}
            /> */}
            PLAY
        </button>
        <button className='skip-btn' onClick={()=> props.skipSong(true)}>
            {/* <FontAwesome icons={faForward} /> */}
            NEXT
        </button>
    </div>
  )
}

export default PlayerControl
