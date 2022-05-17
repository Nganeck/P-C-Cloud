import { useParams } from 'react-router-dom';
import Header from './header/Header';
import classes from './secretary.module.css';
import SideMenu from "./side-menu/SideMenu";
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { List } from '@mui/material';
import PatientList from './patient-management/PatientList';
const Secretary = () => {


    const params = useParams();
    const secretaryId = params.id;
    const [patientId,setPatientId] = useState('');
    const [doctorId,setDoctorId] = useState('');

    // search bar 
    const [searchBarText,setSearchBarText] = useState('');
    console.log(searchBarText);

    return(
        <div className={classes.screen}>
            <SideMenu />
            <div className={classes.main}>
                <Header searchBarText = {searchBarText} setSearchBarText={setSearchBarText}/>
                <div className={classes.content}>

                <Switch>
                    <div className={classes.content}>
                        <Route path={`/secretary/${secretaryId}/list-patients`}>
                            <p>list-patients</p>
                            <PatientList/>
                        </Route>
                        <Route path={`/secretary/${secretaryId}/start-session`}>
                            <p>session page</p>
                        </Route>
                        
                        <Route path={`/secretary/${secretaryId}/account`}>
                            <p>the account page</p>
                        </Route>
                    </div>
                </Switch>


                </div> 
            </div>
            
            
        </div>
    );


}
export default Secretary;