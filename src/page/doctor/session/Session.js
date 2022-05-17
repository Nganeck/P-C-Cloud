import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import classes from './session.module.css';
const Session = () => {

    // get the patient's id
    //const patientId = useState('')

    // the url
    const params = useParams();
    console.log(params);
    const url = `doctor/${params.id}/seance`;

    /* This page will have 3 tabs 
        the consultation
        the test
        the result 
        the prescription
    */
   // step 1: create the header

    return(
        <div>
            <header className={classes.consultationHeader}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={`${url}/consultation`} activeClassName={classes.active}>Consultation</NavLink>
                        </li>
                        <li>
                            <NavLink to='test' activeClassName={classes.active}>Test</NavLink>
                        </li>
                        <li>
                            <NavLink to='resultat' activeClassName={classes.active}>Resultat</NavLink>
                        </li>
                        <li>
                            <NavLink to='ordonnance'>Ordonnance</NavLink>
                        </li>
                        
                    </ul>
                </nav>
            </header>

            <div>
                
            </div>
        </div>
    );

}
export default Session