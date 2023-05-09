import React, {createContext, useState} from "react";

export const AuthContext = createContext({});

function AuthContextProvider({ children }){

    const [adminState, setAdminState] = useState('admin');
    const [adminPasswordState, setAdminPassState] = useState('wachtwoord');
    const [authState, setAuthState] = useState(false);
    const [showAdd, setShowAdd] = useState(false);

    function trueState(){
        setAuthState(true);
    }

    function falseState(){
        setAuthState(false);
    }

    function openPop(){
        setShowAdd(true);
    }
    function closePop(){
        setShowAdd(false);
    }

    const authData = {
        adminusername: adminState,
        adminpassword: adminPasswordState,
        loginStatus: authState,
        loginFunction: trueState,
        logoutFunction: falseState,
        popStatus: showAdd,
        showOpenFunction: openPop,
        showCloseFunction: closePop,
        showAdd: showAdd,

    }



    return (
        <>
            <AuthContext.Provider value={authData}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthContextProvider;
