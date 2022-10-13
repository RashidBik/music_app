import React from 'react'
import FontAwesome from 'react-fontawesome'

const Player = (props) => {
  return (
    <div>
      <audio>

      </audio>
      <h4>
        Playing now
      </h4>
      <PlayerDetail props={props.song} />
      <p><strong>Next Up:</strong> {props.nextSong.title} by {props.nextSong.artist} </p>
    </div>
  )
}

export default Player
