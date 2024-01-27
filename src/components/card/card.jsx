import React from 'react';
import './card.styles.css'

const Card = (props) => {
  const { monster: { id, name } = { id: 0, name: 'Unknown'  } } = props

  return (
    <div className='card-container'>
      <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
      <h1>{name}</h1>
    </div>
  )
}

export default Card;