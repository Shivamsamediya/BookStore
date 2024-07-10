// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useContext} from 'react';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthProvider ({ children }) {
    const initialAuthUser= localStorage.getItem("Users");
    const[authUser,setAuthUser]=useState(
        initialAuthUser? JSON.parse(initialAuthUser):undefined
    );
    return (
        <AuthContext.Provider value={[ authUser,setAuthUser ]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
