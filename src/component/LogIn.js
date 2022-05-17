import FramedCard from '../UI/FramedCard';
import classes from './log-in.module.css';
import { useContext, useRef, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import AuthContext from '../store/auth-context';
//forgot password
//remember me
//server side authentification
const LogIn = () =>{

    const params = useParams();
    const history = useHistory();
    const authCtx = useContext(AuthContext);
    const rememberUserCheckboxRef = useRef();
    const idRef = useRef();
    const mdpRef = useRef();
    
    

    const [identifiant, setIdentifiant] = useState("");
    const [mdp, setMdp] = useState("");
    const [idErrorMessage,setIdErrorMessage] = useState("");
    const [mdpErrorMessage, setMdpErrorMessage] =useState("");
    
    
    //*validation functions(to be modified)
    const validateId = id => identifiant.trim().length>=1;
    const validateMdp = mdp => mdp.trim().length>=1;

    // Change Handlers
    const identifiantChangeHandler =  event => {

        setIdentifiant(event.target.value);
    }
    const mdpChangeHandler =  event => {
        setMdp(event.target.value);
    }

    //Blur Handlers
    const idBlurHandler = event => {

        

    }
    const mdpBlurHandler = event => {

    }

    // form submit Handler
    const submitHandler = (event) => {

        event.preventDefault();
        
        // checking if id is less than one
        if(!validateId(identifiant)){
            setIdErrorMessage("invalid id: must be greater than one");
            // set the id field on focus
            return;
        }
        setIdErrorMessage("");
        if(!validateMdp(mdp)){
            setMdpErrorMessage("invalid must be greater than 1");
            return;
        }
        setMdpErrorMessage("");
        
        //* server side authentification

// post to the back end
        const url = "https://localhost/php-back-end/log-in.php";

        const data = {
            id: identifiant,
            password: mdp,
            role: params.role
        }

            // alternative
            //axios.post(url,data1);
        const response = fetch(url,
            {
                mode:'no-cors',
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
                console.log(dataR);
                
            }).catch(e=> console.log(e));

            console.log('Done!: '+response);


        // authCtx.logIn(identifiant, mdp, params.role);
        // console.log("Signed in");
        // console.log()
        // history.push(`/${params.role}/${identifiant}`);
    }
    // Code for debugging...................
    console.log(authCtx.id);
    console.log(authCtx.isLoggedIn);
    console.log(idRef);
    
    


    
   return(
       <FramedCard>
           <form onSubmit={submitHandler} className={classes.loginForm}>
               <div className={classes.namePasswordDiv}>
                    <input placeholder= {`identifiant de ${params.role}`} value={identifiant} 
                    ref= {idRef} onChange={identifiantChangeHandler}
                    onBlur={idBlurHandler}/>
                    <p className={classes.error}>{idErrorMessage}</p>
                    <input placeholder='mot de passe' type='password' value={mdp}
                     ref={mdpRef} onChange = {mdpChangeHandler}
                     onBlur={mdpBlurHandler}/> 
                     <p className={classes.error}>{mdpErrorMessage}</p>
                </div>
           <div className={classes.checkAndForgot}>
               <div className={classes.checkboxDiv}>
                   <input type='checkbox' ref={rememberUserCheckboxRef}/>
                    Remember Me
                </div>
               <div className={classes.forgotPasswordDiv}><Link to="/">Forgot Password</Link></div>
            </div>    
            <button type='submit' className={classes.logInButton}>Log In</button>
           </form>
       </FramedCard>
   );

}
export default LogIn;