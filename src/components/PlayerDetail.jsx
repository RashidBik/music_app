import React from 'react'

const PlayerDetail = ({props}) => {
  return (
    <div className='c-player--details'>
        <div className='details-img'>
          <img src={props.img_src}
           alt="an image" 
           className=''
           width='190px'
           height='190px'
           />
        </div>
        <h3 className='details--title'>{props.title}</h3>
        <h4 className='details--artist'>{ props.artist }</h4>
    </div>
  )
}

export default PlayerDetail
