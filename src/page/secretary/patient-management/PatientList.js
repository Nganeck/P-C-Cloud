import { useState } from "react";
import PatientItem from './PatientItem';
const PATIENTS = [
    {
        firstName:'Jean',
        lastName : 'Esso',
        matricule: 'PAT23943JKL'
    },
    {
        firstName:'Pierre',
        lastName : 'Esso',
        matricule: 'PAT23943JKL'
    },
    {
        firstName:'Jacque',
        lastName : 'Obam',
        matricule: 'PAT23943JKL'
    }
]

const PatientList = props => {
    const [queryKey,setQueryKey] = useState(props.searchBarText);
    const [patients,setPatients] = useState(PATIENTS);

    return(
        <div>
            {PATIENTS.map((patient,index)=><PatientItem patient={patient}/>)}
        </div>
    )
}
export default PatientList;