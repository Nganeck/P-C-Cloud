import { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FramedCard from '../../UI/FramedCard';
import classes from './sign-up.module.css';

const patient_object={
    firstName: "", 
    lastName: "", 
    email: "", 
    password1: "",
    password2: ""
}

const SignUp = () =>{

    const [patient,setPatient] =  useState(patient_object);
    const [agree, setAgree] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef1 = useRef();
    const passwordRef2 = useRef();
    const termsOfServiceRef = useRef();
    const history = useHistory();

    //change Handlers
    const firstNameChangeHandler = event =>{
        setPatient((previousState)=>{
            const updatedState = {...previousState};
            updatedState.firstName = event.target.value;
            return updatedState;
        })
    }

    const lastNameChangeHandler = event =>{
        setPatient((previousState)=>{
            const updatedState = {...previousState};
            updatedState.lastName = event.target.value;
            return updatedState;
        })
        
    }

    
    const emailChangeHandler = event =>{
        setPatient((previousState)=>{
            const updatedState = {...previousState};
            updatedState.email = event.target.value;
            return updatedState;
        })
    }

    const password1ChangeHandler = event =>{
        setPatient((previousState)=>{
            const updatedState = {...previousState};
            updatedState.password1 = event.target.value;
            return updatedState;
        })
        
    }
    
    const password2ChangeHandler = event =>{
        setPatient((previousState)=>{
            const updatedState = {...previousState};
            updatedState.password2 = event.target.value;
            return updatedState;
        })
        
    }
    const formFocusHandler = event =>{
        setErrorMessage("");
    }
    const checkboxChangeHandler = event =>{
        setAgree(event.target.checked);
        console.log(event.target.checked);
    }
    //Submit Handler
    const formSubmitHandler = event =>{
        event.preventDefault();
        //validate form
        if(patient.firstName.trim().length<1){
            setErrorMessage('invalid first name');
            return;
        }

        if(patient.lastName.trim().length<1){
            setErrorMessage('invalid last name');
            return;
        }
        if(!patient.email.includes('@') || patient.email.trim().length<2){
            setErrorMessage('invalid email');
            return;
    
        }


        // passwords match

        if(patient.password1 !== patient.password2){
            setErrorMessage('password mismatch');
            return;
        }
        if(patient.password1.trim().length<1 || patient.password2.trim().length<1){
            setErrorMessage('password empty!');
            return;
        }
        // terms of service agreed
        // if(!agree){
        //     setErrorMessage('must agree to terms of service');
        //     return;
        // }
        // debugging messages
        // console.log('start');
        // console.log('agree to terms:'+agree);
        // console.log('end')

        // save to the db and receive id in response

        const data = {
            email:patient.email,
            password: patient.password1
        }

        // post to the back end
        const url = "https://localhost/php-back-end/ajouter_patient.php";

            // alternative
            //axios.post(url,data1);
        const response = fetch(url,
            {
                method:'POST',
                body: JSON.stringify(data),
                headers:{
                    "Access-Control-Allow-Origin": "*",
                    'Content-type':'application/json'}
            }).then(response=>{
                //console.log(response.json());
                return response.json();
                
            }).then(dataR=>{
                //console.log(response.json());
                console.log(dataR.matricule);
                
            }).catch(e=> console.log(e));

            console.log('Done!: '+response);



        // direct to patient page
        //history.push('/patient/id');
        
    }



    return(
        <FramedCard>
            <form className={classes.signUpForm} onSubmit={formSubmitHandler} onFocus={formFocusHandler}>
                {errorMessage!=="" &&<div className={classes.errorMessage}>{errorMessage}</div>}
                <div className={classes.firstNameLastName}>
                    <input placeholder='First Name' ref={firstNameRef}
                    onChange={firstNameChangeHandler}
                    value={patient.firstName}/>
                    <input placeholder='Last Name'ref={lastNameRef}
                    onChange={lastNameChangeHandler}
                    value={patient.lastName}/>
                </div>
                <input placeholder='email(must include @)' ref={emailRef}
                onChange={emailChangeHandler}
                value={patient.email}/>
                <input type='password' placeholder='password' ref={passwordRef1}
                onChange={password1ChangeHandler}
                value={patient.password1}/>
                <input type='password' placeholder='Confirm password' ref={passwordRef2}
                onChange={password2ChangeHandler}
                value={patient.password2}/>
                <span className={classes.termsAndConditions}>
                <input ref={termsOfServiceRef} type='checkbox' 
                onChange={checkboxChangeHandler}/>
                </span>
                <span className={classes.termsText}>I agree with the terms and conditions</span>
                <div className={classes.signUpButtonDiv}>
                <button type='submit'>Sign Up</button>
                </div>
                <Link to='/log-in/patient'>already have an account?</Link>
            </form>
            
        </FramedCard>
    )

}
export default SignUp;