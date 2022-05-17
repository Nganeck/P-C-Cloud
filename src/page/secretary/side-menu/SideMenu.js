import classes from './side-menu.module.css';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink, useParams} from 'react-router-dom';
const SideMenu = (props) => {

    const params = useParams();
    const id = params.id;

    // get the current url
    const url = `/secretary/${id}`;

    console.log(url); 
    return(
        <div className= {classes.sideMenu}>
            <header><h3>Menu</h3></header>
            <nav>
                <ul>
                    <NavLink to={`${url}/home`} activeClassName={classes.active}><li><HomeIcon/>Home</li></NavLink>
                    <NavLink to={`${url}/list-patients`} activeClassName={classes.active}><li><AssignmentIcon/><span>Patients</span></li></NavLink>
                    <NavLink to={`${url}/start-session`} activeClassName={classes.active}><li><AccessTimeIcon/><span>Session</span></li></NavLink>
                    <NavLink to={`${url}/account`} activeClassName={classes.active}><li><PermIdentityIcon/><span>Account</span></li></NavLink>
                </ul>
            </nav>

        </div>
    )

} 
export default SideMenu;