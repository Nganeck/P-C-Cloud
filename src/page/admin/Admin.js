
import { Route, Switch, useParams} from 'react-router-dom';
import classes from './admin.module.css';
import Crud from './Crud';
import Button from '@mui/material/Button';


const Admin = () => {

    const params = useParams();

    return (<div className= {classes.screen}>
        <Crud/>
        
    </div>);
  
}
export default Admin;
