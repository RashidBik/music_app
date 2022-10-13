import React from 'react'
import PlayerDetail from './PlayerDetail'
import FontAwesome, { faPlay, faPause, faForward, faBackward} from 'react-fontawesome'; 

const PlayerControl = () => {

    return (
    <div>
        <button>
            <FontAwesomeIcon icons={faBackward} />
        </button>
        <button>
            <FontAwesome icons={faPlay}/>
        </button>
        <button>
            <FontAwesome icons={faForward} />
        </button>
    </div>
  )
}

export default PlayerControl
