import { Fragment, useState } from 'react';
import Header from './Header';
import SearchSvg from '../../assets/svg/search';
import classes from './patient.module.css';
import HomeIcon from '../../assets/images/home.png';
import Speech from '../../assets/images/speech-bubble.png';
import Bell from '../../assets/images/bell.png';
import Options from './Options'
import MoreInfo from './MoreInfo';
import SideMenu from './SideMenu';
import Content from './Content';
import { Route, useParams, Switch} from 'react-router-dom';
import Meet from './Meet';
const Patient = (props) =>{

    const [searchText, setSearchText] = useState('');

    // extract the patient's id
    const params = useParams();
    const id = params.id


    // return(
    //     <main className={classes.main}>
    //         <header className={classes.header}>
    //             <span className= {classes.siteName}>P&C CLOUD</span>
    //             <span className={classes.search}> 
    //                 <SearchSvg></SearchSvg>
    //                 <input placeholder='Search...'/> 
    //             </span>
    //             <span className={classes.iconSpan}>
    //                 <span><img src={HomeIcon}/></span>
    //                 <span><img src={Speech}/></span>
    //                 <span><img src={Bell}/></span>
    //             </span>
    //             <span className={classes.nameAndIcon}>
    //                 <span >Username</span>
    //                 <span>Icon</span>
    //             </span>
            
    //         </header>

    //         {/* <div className={classes.content}><Options></Options></div> */}
    //         <div className={classes.content}><MoreInfo></MoreInfo></div>
            
    //     </main>
    // )
    return(
        // <Fragment>
        //     <SideMenu/>
        //     <div className={classes.main}>
 
        //     </div>
        // </Fragment>
        <div className={classes.screen}>
            <SideMenu id = {id} />
            <div className={classes.main}>
                <Header id={id} setSearchText = {setSearchText} searchText = {searchText}/>
                <Switch>
                    <div className={classes.content}>
                        <Route path={`/patient/${id}/history`}>
                            <p>the history page</p>
                        </Route>
                        <Route path={`/patient/${id}/check-up`}>
                            <p>the check-up page</p>
                        </Route>
                        <Route path={`/patient/${id}/meet`}>
                            <Meet/>
                        </Route>
                        <Route path={`/patient/${id}/account`}>
                            <p>the account page</p>
                        </Route>

                    </div>
                </Switch>
            </div>

        </div>
    );

} 
export default Patient;