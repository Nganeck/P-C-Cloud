
import classes from './meeting-item.module.css';

const MeetingItem = props =>{
    return(
        <div className={classes.meetingItem}>
            <p>meeting item</p>{props.number}
        </div>
    )
}
export default MeetingItem;