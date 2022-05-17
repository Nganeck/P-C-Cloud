import classes from './patient-item.module.css'
const PatientItem = props => {
    const patient = props.patient;

    return(
        <div className={classes.patientItem}>
            <div>
               {patient.firstName} 
            </div>
            <div>
               {patient.lastName} 
            </div>
            <div>
               {patient.matricule} 
            </div>
        </div>
    )
}
export default PatientItem;