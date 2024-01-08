import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.config";


export const UserContext = createContext(null);



function AuthContext({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        })
        return () =>{
            return unSubscribe;
        }
    },[])

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        loading(true);
        return signOut(auth);
    }


    
    const value = {
        signUp,
        login,
        logOut,
        setUser,
        setLoading,
        loading,
        user
    }

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}


AuthContext.propTypes = {
    children: PropTypes.node
}

export default AuthContext;