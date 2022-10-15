import React from 'react'
import { useState } from 'react'
import { data } from '../../Data'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'; 


const List = () => {
    const [isSort, setIsSort] = useState('title');
    const handleSort = (event) => {
        setIsSort(event.target.value);
        }
 
return (
    <div className='c-list'>
        <div className='header'>
            <select
                className='list--sort' 
                onChange={handleSort} 
                value={isSort.value} >
                <option value='title'>Sort</option>
                <option value='title'>Title</option>
                <option value='name'>Name</option>
                <option value='artist'>Artist</option>
            </select>
            <div className='search'>
                <input type="search"/>
                <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
            </div>
            <div>
            <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
        <div className='all-row'>
        {
                data.map((music)=> {
                    return (
                        <div key={music.title} className='music-row'>
                            {isSort === 'title' && music.title}
                            {isSort === 'name' && music.name}
                            {isSort === 'artist' && music.artist}
                        </div>
                    )
                } 
            )}
        </div>
        <div >
            
        </div>
    </div>
  )
}

export default List
