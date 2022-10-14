import React from 'react'
import PlayerDetail from './PlayerDetail'
import FontAwesome, { faPlay, faPause, faForward, faBackward} from 'react-fontawesome'; 

const PlayerControl = () => {

    return (
    <div className='c-player--controls'>
        <button className='skip-btn'>
            <FontAwesomeIcon icons={faBackward} />
        </button>
        <button className='play-btn'>
            <FontAwesome icons={faPlay}/>
        </button>
        <button className='skip-btn'>
            <FontAwesome icons={faForward} />
        </button>
    </div>
  )
}

export default PlayerControl
