
import { Route, useParams } from 'react-router-dom';
import Session from './session/Session';
import classes from './doctor.module.css';
import Header from './Header';
import SideMenu from './SideMenu';
const Doctor = () =>{
    const params = useParams();
    const doctorId = params.id;

    return (

        
        <div className={classes.screen}>
            <SideMenu/>
            <div className= {classes.content}>
                <Header/>
                <div>

                <Route path= {`/doctor/${doctorId}/rendez-vous`}>

                    <p>This is where the RDV page is supposed to be</p>

                </Route>

                </div>
                <Route path= {`/doctor/${doctorId}/seance`}> 
                    
                    <Session/>

                </Route>
            </div>
        </div>
    )
    

}
export default Doctor;