import React from 'react';
import '../style/ResultClothCard.css';
import ResultCardItem from './ResultCardItem';

function ResultClothCard() {
  return (
    <div className='cards'>
      <h1>Results</h1>
      <div className='result_cards__container'>
        <div className='result_cards__wrapper'>
          <ul className='result_cards__items'>
            <ResultCardItem
              
              src='images/User.png'
              text='Before'
              
              isGame={true}
              
            />
            <ResultCardItem
              
              src='images/Output.png'
              text='After'
              
              isGame={true}
              
            />
            
          </ul>
        
        </div>
      </div>
    </div>
  );
}

export default ResultClothCard;
