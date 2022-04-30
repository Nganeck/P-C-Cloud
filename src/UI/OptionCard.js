import classes from './option-card.module.css';

import { Fragment } from 'react';
import { useState } from 'react';
const OptionCard = (props) =>{


    const clickHandler = () =>{
        props.onClick(props.value);
        
    }


    return( <img className= {classes.card} src={props.src} onClick={clickHandler} />);
    
}
export default OptionCard;