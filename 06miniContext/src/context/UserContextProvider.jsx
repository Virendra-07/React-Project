import React, {useState} from "react";
import UserContext from "./UserContext";

const UserContextProvider =  ({children}) => {
    // const [user, setUser] = React.useState(null)  agar hm useState ko import nhi karte hai to direct yese likh sakte hai 
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;