import classes from './note-element.module.css';
import { useState } from 'react';
const NoteElement = (props) =>{

    const [key, setKey] = useState(props.noteKey);
    const [value, setValue] = useState(props.noteValue);

    const keyChangeHandler = event =>{
        setKey(event.target.value);
    }

    const valueChangeHandler = event =>{
        setValue(event.target.value);
    }

    return(
        <div className={classes.noteElement}>
            <input value={key} onChange={keyChangeHandler}/>
            <input value={value}onChange={valueChangeHandler} type='text'/>
        </div>
    )

}
export default NoteElement;