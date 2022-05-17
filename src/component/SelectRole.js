import FramedCard from '../UI/FramedCard';
import classes from './select-role.module.css';
import {useHistory} from 'react-router-dom';
const SelectRole = () =>{

    const history = useHistory();
    const roleSelectHandler = event =>{

        console.log(event.target.value);
        console.log("Button clicked");
        const url = "log-in/" + event.target.value;
        history.push(url);

    }

    return(
        <FramedCard>
            <div className={classes.content}>

            <button onClick={roleSelectHandler} value='patient'>Patient</button>
            <button onClick={roleSelectHandler} value='doctor'>Doctor</button>
            <button onClick={roleSelectHandler} value='secretary'>Secretary</button>
            <button onClick={roleSelectHandler} value='admin'>Admin</button>
            
                
            </div>
        </FramedCard>

    );

}
export default SelectRole;