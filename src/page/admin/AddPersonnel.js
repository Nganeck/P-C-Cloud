import { Fragment, ReactDOM } from "react";
import classes from './add-personnel.module.css'
import { useState } from "react";
// have to validate the entered personnel
const Modal = (props) => {

    return <div className= {classes.modal} onClick={props.onClick(false,{})} ></div>;

}
const Form = (props) => {
    const [personnel,setPersonnel] = useState({name:'', 
                                surname:'',
                            email:''});
    //ChangeHandlers
    const nameChangeHandler = event =>{
        setPersonnel(
            (previousState)=>{
                const updatedState = {...previousState}
                updatedState.name = event.target.value;
                return updatedState;
            }
        );
    }

    const surnameChangeHandler = event =>{
        setPersonnel(
            (previousState)=>{
                const updatedState = {...previousState}
                updatedState.surname = event.target.value;
                return updatedState;
            }
        );
    }
    const emailChangeHandler = event =>{
        setPersonnel(
            (previousState)=>{
                const updatedState = {...previousState}
                updatedState.email = event.target.value;
                return updatedState;
            }
        );
    }
    //submitHandler
    const formSubmitHandler = event =>{
        event.preventDefault();
        // have to validate the entered personnel

        // then return the object
        props.onClick(false,personnel);


    }
    
    return (
        <div className= {classes.formDiv}>
            <form onSubmit={formSubmitHandler}>
                <input placeholder="name" value={personnel.name} onChange={nameChangeHandler}/>
                <input placeholder="surname" value={personnel.surname} onChange={surnameChangeHandler}/>
                <input placeholder="email" type='email'value={personnel.email} onChange={emailChangeHandler}/>
                <button type="submit">OK</button>
            </form>
        </div>
    )
}
const AddPersonnel = (props) => {


    return(
    <Fragment>
        <Modal onClick ={props.showHandler.bind(false,{})}/>
        <Form onClick={props.showHandler}/>
    </Fragment>
    );


}
export default AddPersonnel;