
import React, { Component } from 'react';
import '../style/File_Item.css';
import  text  from './score'; 



function FileItem() {
    return (
     
        
        <div className='file_cards__item__info'>
                <h5 className='file_cards__item__text'>{"MynCash:  "}{text}</h5>
        </div>
    );
  }
  
  export default FileItem;

