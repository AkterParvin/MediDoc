import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // google sign up 
    const googleRegister = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };

    // login with email and password 
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //create a user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        console.log(email, password);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //logout user
    const logOut = () => {
        setLoading(true);
        return (signOut(auth));

    };

    // watching the current user

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
           
            console.log("current user watching", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);
    //update user profile info
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    };
    const userInfo = {
        user, loading, logOut, createUser, loginUser, googleRegister, updateUserProfile 
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.object
}

export default AuthProvider;