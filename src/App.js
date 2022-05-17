import logo from './logo.svg';
import './App.css';
import LogIn from './component/LogIn';
import Patient from './page/patient/Patient';
import OptionCard from './UI/OptionCard';
import Options from './page/patient/Options';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import SelectRole from './component/SelectRole';
import AuthContextProvider from './store/AuthContextProvider';
import SignUp from './page/patient/SignUp';
import Admin from './page/admin/Admin';
import Doctor from './page/doctor/Doctor';
import Secretary from './page/secretary/Secretary';
const App = () => {
  
  
  return(
    <AuthContextProvider>
      <Switch>
        <Route path='/role'>
          <SelectRole/>
        </Route>
        <Route path='/sign-up'>
          <SignUp/>
        </Route>
        <Route path='/log-in/:role'>
          <LogIn></LogIn>
        </Route>
        <Route path='/patient/:id'>
          <Patient></Patient>
        </Route>
        <Route path='/secretary/:id'>
          <Secretary/>
        </Route>
        {/* <Route path='/doctor/:id'>
          <Doctor/>
        </Route> */}
        <Route path='/admin/:id'>
          <p>admin page</p>
          <Admin/>
        </Route>
        <Route path='/doctor/:id'>
          <Doctor></Doctor>
        </Route>

      </Switch>
    </AuthContextProvider>
    
  );
  //return (<SignIn/>);
  //return (<main><Patient/></main>);
  //return(<OptionCard/>);
  //return(<Options></Options>);

}

export default App;
