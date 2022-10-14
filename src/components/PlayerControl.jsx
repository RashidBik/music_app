import React from 'react'
import PlayerDetail from './PlayerDetail'
import FontAwesome, { faPlay, faPause, faForward, faBackward} from 'react-fontawesome'; 

const PlayerControl = (props) => {

    return (
    <div className='c-player--controls'>
        <button className='skip-btn' onClick={()=> props.skipSong(false)}>
            <FontAwesomeIcon icons={faBackward} />
        </button>
        <button className='play-btn' onClick={()=> props.setIsPlaying(!props.isPlaying)}>
            <FontAwesome icons={props.isPlaying ? faPause : faPause}/>
        </button>
        <button className='skip-btn'>
            <FontAwesome icons={faForward} />
        </button>
    </div>
  )
}

export default PlayerControl
