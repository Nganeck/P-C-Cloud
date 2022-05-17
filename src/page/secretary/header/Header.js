import classes from './header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, makeStyles } from '@mui/material';
const Header = (props) => {

 
    return (
        <header className={classes.header}>
                 <span className= {classes.siteName}>P&C CLOUD</span>
                 <span className={classes.search}> 
                     <SearchIcon />
                     <input placeholder='Search...' value={props.searchBarText} onChange={e=>props.setSearchBarText(e.target.value)}/> 
                 </span>
                 <span className={classes.iconSpan}>
                     {/* <span><img src={HomeIcon}/></span>
                     <span><img src={Speech}/></span> */}
                     <Badge badgeContent = {5} max={9} variant='dot' color="success"><NotificationsIcon/></Badge>
                    <HomeIcon/>
                    <QuestionAnswerIcon/>
                 </span>
                 <div className={classes.nameAndIcon}>
                     <span >Username</span>
                     img
                 </div>
            
        </header>

    );
}
export default Header;