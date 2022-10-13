import React from 'react'

const PlayerDetail = (props) => {


  return (
    <div>
        <div>
            <img src={props.song.img_src} alt='' />
        </div>
        <h3>{props.song.title}</h3>
        <h4>{ props.song.artist }</h4>
    </div>
  )
}

export default PlayerDetail
