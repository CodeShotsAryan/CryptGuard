import React from "react";
import UserContext from "./components/UserContext";
import { useState } from "react";

const LoginContextProvider = ({children}) => {
        const [isLogged , setIsLogged] = useState(false)

        return(
            <UserContext.Provider value={{isLogged , setIsLogged}}>
                {children}
            </UserContext.Provider>
        )
}

export default LoginContextProvider