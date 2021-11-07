import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Result from './Result'

function clickHandler() {
  console.log("in onClick ");
  // fetch("http://localhost:3001/runpy", (res)=>{
  //   console.log("Server response " + res);
    
  // })
  

}
function CardItem(props) {
  return (
    <>
      <li className='cards__item'  onClick={clickHandler}>
            <Link className='cards__item__link' to={props.path}>
              <figure className='cards__item__pic-wrap' data-category={props.label}>
                <img
                  className='cards__item__img'
                  alt='Image'
                  src={props.src}
                  
                />
              </figure>
              <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
              </div>

              <div className='button-group' style={{margin:'auto', padding:'2%'}}>
                {props.isGame === true ? 
                  <ButtonGroup variant="outlined" aria-label="outlined button group"/> : 
                  <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button>Small</Button>
                    <Button>Medium</Button>
                    <Button>Large</Button>
                  </ButtonGroup> }

             </div>
            </Link>
      </li>
    </>
  );
}

export default CardItem;
