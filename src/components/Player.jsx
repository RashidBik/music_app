import React from 'react'
import FontAwesome from 'react-fontawesome'
import PlayerControl from './PlayerControl'
import PlayerDetail from './PlayerDetail'

const Player = (props) => {
    // console.log(props);
  return (
    <div className='c-player'>
      <audio>

      </audio>
      <h4>
        Playing now
      </h4>
      <PlayerDetail props={props.song} />
      <p><strong>Next Up:</strong> {props.song.title} by {props.song.artist} </p>
    </div>
  )
}

export default Player
