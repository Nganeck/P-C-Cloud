import classes from './side-menu.module.css';
import Button, { HomeMini } from '@mui/icons-material'
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { NavLink, useParams } from 'react-router-dom';
const SideMenu = () =>{
    const params = useParams();
    const doctorId = params.id;
    return(
    <div className= {classes.sideMenu}>
        <header><h3>Menu</h3></header>
        <nav>
            <ul>
                <li><NavLink to= {`/`} activeClassName={classes.active}> <HomeIcon fontSize='small'/>Home</NavLink></li>
                <li><NavLink to={`/doctor/${doctorId}/seance`} activeClassName={classes.active}> <AssignmentIcon fontSize='small'/>Seance</NavLink></li>
                <li><NavLink to= {`/doctor/${doctorId}/rendez-vous`}> <CalendarMonthIcon fontSize='small'/>Rendez-vous</NavLink></li>
            </ul>
        </nav>
        
    </div>);

}
export default SideMenu;