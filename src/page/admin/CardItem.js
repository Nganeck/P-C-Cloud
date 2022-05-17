import { useParams } from 'react-router-dom';
import classes from './card-item.module.css';
const CardItem = (props) => {
    // will recieve some props - onClick included

    //role



    // onClick
    const updateRequestHandler = event =>{
        props.onUpdateRequest(props.role,event.target.value);


    }
    return (
    <div className={classes.card}>
        <div className={classes.role}>
            <div>
                {props.role}
            </div>
            <div>
                <small><i>(add/remove {props.role})</i></small>
            </div>

        </div>
        <div className={classes.buttonDiv}>
            <button onClick={updateRequestHandler} value='+'>+</button>
            <button onClick={updateRequestHandler} value='-'>-</button>
        </div>
    </div>);
}
export default CardItem;