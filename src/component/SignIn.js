import Card from '../UI/Card';
import classes from './sign-in.module.css';
const SignIn = () =>{

    return (
        <Card className={classes.card}>
            <div className={classes.leftSideDiv}>
                <h1>CONNEXION</h1>
                <form className={classes.form}>
                    <input placeholder='Identifiant'/>
                    <input placeholder='mot de passe'/>
                    <div className={classes['checkbox-div']}>

                        <input id='checkbox' className={classes['check-remember']} type="checkbox"/>
                        <label for="checkbox">Remember Me </label>
                        <a > Forgot password</a>

                    </div>
                    <br></br>
                    <button type='submit'>OK</button>
                </form>
                {/* space for the bottom image */}
            </div>


        </Card>
    );

}
export default SignIn;