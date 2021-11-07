import React from 'react';
import { Link } from 'react-router-dom';



function clickHandler() {
    console.log("in onClick ");
    fetch("http://localhost:3001/rungame", (res)=>{
      console.log("Server response " + res);
    })

  }

function GameCardItem(props) {
  return (
    <>
      <li className='cards__item' onClick={clickHandler}>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default GameCardItem;
