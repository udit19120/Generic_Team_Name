import React from 'react';
import '../style/ResultCards.css';
import ResultCardItem from './ResultCardItem';

function ResultCard() {
  return (
    <div className='cards'>
      <h1>Results</h1>
      <div className='result_cards__container'>
        <div className='result_cards__wrapper'>
          <ul className='result_cards__items'>
            <ResultCardItem
              
              src='images/hand.jpeg'
              text='Before'
              
              isGame={true}
              
            />
            <ResultCardItem
              
              src='images/Img_result.jpeg'
              text='After'
              
              isGame={true}
              
            />
            
          </ul>
        
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
