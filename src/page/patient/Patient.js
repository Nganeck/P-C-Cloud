import SearchSvg from '../../assets/svg/search';
import classes from './patient.module.css';
import HomeIcon from '../../assets/images/home.png';
import Speech from '../../assets/images/speech-bubble.png';
import Bell from '../../assets/images/bell.png';
import Options from './Options'
const Patient = (props) =>{

    return(
        <main className={classes.main}>
            <header className={classes.header}>
                <span className= {classes.siteName}>P&C CLOUD</span>
                <span className={classes.search}> 
                    <SearchSvg></SearchSvg>
                    <input placeholder='Search...'/> 
                </span>
                <span className={classes.iconSpan}>
                    <span><img src={HomeIcon}/></span>
                    <span><img src={Speech}/></span>
                    <span><img src={Bell}/></span>
                </span>
                <span className={classes.nameAndIcon}>
                    <span >Username</span>
                    <span>Icon</span>
                </span>
            
            </header>

            <div className={classes.content}><Options></Options></div>
            
        </main>
    )

}
export default Patient;