import React, { Children, useState } from 'react'
import userContext from './userContext'
const userContextProvider = () => {
    const [isLogged,setIsLogged ] = useState(true);

  return (
   <userContext.Provider value={{isLogged,setIsLogged}}>
   {Children}
   </userContext.Provider>
  )
}

export default userContextProvider
