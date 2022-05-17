import { useReducer } from "react";
import AuthContext from "./auth-context";
// create the reducer function
const authReducer = (state, action) => {

    const updatedState = {...state};
    if(action.type ==="logout"){
        updatedState.isLoggedIn = false;
        updatedState.id = "";
        updatedState.mdp = "";
    }
    if(action.type ==="login"){
        updatedState.id =action.value.id;
        updatedState.mdp =action.value.mdp;
        updatedState.role = action.value.role;
        updatedState.isLoggedIn = true;

        
    }
    console.log(updatedState);
    return updatedState;
    

};
// create the initial state

const initialAuthState = {
    id: "",
    mdp: "",
    role: "",
    isLoggedIn:"false"
};

const AuthContextProvider = props =>{
     
    const [authState, authStateReducer] = useReducer(authReducer,initialAuthState);
    // user reducer hook

    // going to have to use useEffect to use from
    // the db or localStorage

    const logIn = (id, mdp, role) => {
        authStateReducer({type:"login",
                            value:{
                                    id,
                                    mdp,
                                    role
                                }


        })
    }
    const logOut = () => {
        authStateReducer({type:"logout"})
    }

    const authContext = {
        id: authState.id,
        mdp: authState.mdp,
        role: authState.role,
        isLoggedIn: authState.isLoggedIn,
        logIn,
        logOut
    }
    

    return (<AuthContext.Provider value={authContext}>

        {props.children}

    </AuthContext.Provider>);

}
export default AuthContextProvider;