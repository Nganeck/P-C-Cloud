import classes from './meetings.module.css';
import MeetingItem from "./MeetingItem";
const NUMBERS = [1,2,3,4,5,6,7,8,9,10];
const Meetings = props => {

    return(<div className={classes.meetings}>
        {
            NUMBERS.map(elt=><MeetingItem number={elt}/>)
        }
    </div> )
}
export default Meetings;