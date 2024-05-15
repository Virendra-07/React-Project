import React, {useContext} from "react";
import UserContext from "../context/UserContext";

// yeha user ka data recieve kiya gya hai jo Login page se send kiya gya hai

function Profile(){
    const {user} = useContext(UserContext);

    if (!user) {
        return <div>Please Login</div>
    }
    else{
        return <div>Welcome {user.username}</div>
    }
    
}

export default Profile;