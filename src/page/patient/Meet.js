import { Button } from '@mui/material';
import classes from './meet.module.css';
import { useState } from 'react';
import CreateMeet from './CreateMeet';
import ViewMeet from './ViewMeet';
import { NavLink, Route, Switch, useParams } from 'react-router-dom';
import Meetings from './Meetings';

const Meet = () => {

    const params = useParams();
    const id = params.id;
    console.log('params object: '+(params));
    const currentUrl = `/patient/${id}/meet`;

    return(<div className= {classes.content}>
        <header className={classes.meetHeader}>
        <nav>
          <ul>
              <li>
                  <NavLink to={`${currentUrl}/list`} activeClassName={classes.activeLink} className={classes.link}><center>Meets</center></NavLink> 
              </li>
              <li>
              <NavLink to={`${currentUrl}/new-meeting`} activeClassName={classes.activeLink} className={classes.link}><center>New Meeting</center></NavLink>  
              </li>
          </ul> 
        </nav>
        </header>
        <div className={classes.meet}>
            <Switch>
                <Route path={`${currentUrl}/list`}>
                    <Meetings/>
                </Route>
                <Route path={`${currentUrl}/new-meeting`}>
                    <CreateMeet/>
                </Route>
            </Switch>
        </div>

    </div>);

}
export default Meet;