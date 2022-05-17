import classes from './header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import Speech from '../../assets/images/speech-bubble.png';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, makeStyles } from '@mui/material';
import { fontSize } from '@mui/system';

const Header = (props) => {

    // return(
    //     <header className={classes.header}>
    //             <span className= {classes.siteName}> P<small>&</small>C CLOUD</span>
    //             <span className={classes.search}>
                    
    //                 <SearchSvg></SearchSvg>
    //                     <input/> 
    //             </span>
    //             <span className={classes.iconSpan}>
    //                 <span><img src={HomeIcon} alt='Home'/></span>
    //                 <span><img src={Speech} alt='messages'/></span>
    //                 <span><img src={Bell} alt='notification'/></span>
    //             </span>
    //             <span className={classes.nameAndIcon}>
    //                 <span >Username</span>
    //                 <span>Icon</span>
    //             </span>
                
    //         </header> 
    // )
    return (
        <header className={classes.header}>
                 <span className= {classes.siteName}>P&C CLOUD</span>
                 <span className={classes.search}> 
                     <SearchIcon />
                     <input placeholder='Search...' value={props.searchText} onChange={e=>props.setSearchText(e.target.value)}/> 
                 </span>
                 <span className={classes.iconSpan}>
                     {/* <span><img src={HomeIcon}/></span>
                     <span><img src={Speech}/></span> */}
                     <Badge badgeContent = {5} max={9} color="success"><NotificationsIcon/></Badge>
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