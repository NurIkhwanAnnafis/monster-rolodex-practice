import React from 'react';
import Card from '../card/card';
import './card-list.styles.css'

const CardList = props => {
  const { monsters = [] } = props;

  return (
    <div className='card-list'>
      {monsters && monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  )
}

export default CardList;