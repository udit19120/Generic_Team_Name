import React from 'react';
import '../style/GameCards.css';
import GameCardItem from './GameCardItem';

function GameCards() {
  return (
    <div className='cards'>
      <h1>Games</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <GameCardItem
              
              src='images/6.jpeg'
              text='Win the clothes arcade game!!!'
              path='/'
              isGame={true}
              
            />
            
          </ul>
        
        </div>
      </div>
    </div>
  );
}

export default GameCards;
