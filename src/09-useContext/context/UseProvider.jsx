import { useState } from "react"
import { UserContext } from "./userContext"

const user ={

    id: 19068,
    name: 'Xavier Morales García',
    email: 'fxavi182morales@gmail.com'
}


export const UseProvider = ({children}) => {
  const [user, setUser]=useState();
  
    return (
   <UserContext.Provider value = {{user,setUser}}>
    {children}
   </UserContext.Provider>
  )
}
