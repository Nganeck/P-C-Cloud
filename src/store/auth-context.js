import { createContext } from "react"

const logIn =() => {};

const logOut = () => {};
const defaultAuthContext = {
    id: "",
    mdp: "",
    role: "",
    isLoggedIn: false,
    logIn,
    logOut
};

const AuthContext = createContext(defaultAuthContext);

export default AuthContext;