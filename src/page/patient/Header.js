import SearchSvg from '../../assets/svg/search';
import classes from './header.module.css';
import HomeIcon from '../../assets/images/home.png';
import Speech from '../../assets/images/speech-bubble.png';
import Bell from '../../assets/images/bell.png';

const Header = () => {

    return(
        <header className={classes.header}>
                <span className= {classes.siteName}> P<small>&</small>C CLOUD</span>
                <span className={classes.search}>
                    
                    <SearchSvg></SearchSvg>
                        <input/> 
                </span>
                <span className={classes.iconSpan}>
                    <span><img src={HomeIcon} alt='Home'/></span>
                    <span><img src={Speech} alt='messages'/></span>
                    <span><img src={Bell} alt='notification'/></span>
                </span>
                <span className={classes.nameAndIcon}>
                    <span >Username</span>
                    <span>Icon</span>
                </span>
                
            </header>
    )
}
export default Header;