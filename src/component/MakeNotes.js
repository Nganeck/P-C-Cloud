import { useState } from 'react';
import classes from './make-notes.module.css';
import NoteElement from './NoteElement';

const MakeNotes = () => {

    // will be able to receive a value as a property
    const [notes, setNotes] = useState([{'note1': ''},{'note1': ''},{'note1': ''},{'note1': ''}]);
    const [numNotes,setNumNotes] = useState(notes.length());
    const [submitNotes, setsubmitNotes] = useState(false);

    // submitHandler
    const submitHandler = () =>{

    }

    // return a list of note elements
    // return(
    //     {
    //         notes.map(
    //             (note, index)=> <NoteElement key={index} noteKey = {note.key} noteValue = {note[note.key]} submit={submitNotes} submitHandler={submitHandler}/>
    //         )
    //     }
    // )


}
export default MakeNotes;