import classes from './crud.module.css';
import { useHistory, useParams } from 'react-router-dom';
import CardItem from "./CardItem";
import { useState } from 'react';
import AddPersonnel from './AddPersonnel';

const ROLES = ['Doctor', 'Secretary','Admin'];


//component function  
const Crud = () =>{ 
    
    const history = useHistory();
    const params = useParams();
    const [addPersonnel,setAddPersonnel] =  useState(true);
    const [roleToUpdate, setRoleToUpdate] = useState('');


    const showAddPersonnelHandler = (show, personnel) => {

        // dismiss the personnel pop-up
        setAddPersonnel(show);
        // save the returned value
        console.log(personnel);
    }


    const updatePersonnel = (role,action) =>{


        role = role.toLowerCase();
        console.log('role: ' + role);
        console.log('action '+action);
        setRoleToUpdate(role);
        
        // find out the type of operation: add(+), delete(-)
        if(action==='+'){
            console.log('action to be taken is add(' +action+')');
            setAddPersonnel(true);
            console.log('end');
            // present the form/get the list of the type of personnel(doctor, secretary)

            

            // display that list passing the function that will receive the id and dispatch the action
        }
    }

    
    // const upDatePersonnel = ( role, action) =>{

    //     console.log("upDatePersonnel");
    //     const url = '';

    //     if(action ==='+'){

    //         //call function to add doctor
            
    //         history.push("/admin");

    //         return;

    //     }
    //     if(action ==='-'){
    //         // call function to delete personnel
    //         history.push(`/admin/${params.id}/delete/${role}`)
    //         return;
    //     }
    // }
    return(
        <div className={classes.mainContent}>
                <div className={classes.buttonHolderDiv}>
                    <div className={classes.topDiv}>
                        <header><h1>Options</h1></header>
                    </div>
                        {
                            ROLES.map(role=> <CardItem key={role} role = {role} onUpdateRequest ={updatePersonnel}/>)
                            
                        }
                </div>
            {addPersonnel&&<AddPersonnel showHandler={showAddPersonnelHandler} role={roleToUpdate}/>}
        </div>
    );

    
    

}
export default Crud;
    /*
    
    const history = useHistory();
    const params = useParams();

    // role: name of personnel
    // action: + -
    const upDatePersonnel = ( role, action) =>{

        

        if(action ==='+'){

            //call function to add doctor
            history.push(`/admin/${params.id}/create/${role}`);

            return;

        }
        if(action ==='-'){
            // call function to delete personnel
            history.push(`/admin/${params.id}/delete/${role}`)
            return;
        }
    }
    return(
        <div className={classes.mainContent}>
                <div className={classes.buttonHolderDiv}>
                    <div className={classes.topDiv}>
                        <header><h1>Options</h1></header>
                    </div>
                        {
                            ROLES.map(role=> <CardItem role = {role} onClick={upDatePersonnel.bind(history,params)}/>)
                        }
                </div>
        </div>
    );
    
   */ 


