import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null,
}

// ye function authentication ko track karne ke liye hota hai ki user authentic hai ya nhi ye hm store se hmesa puchenge
// eske liye ese initial state chahiye
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: { 
        // we need should be  export individuals reduucer by individuls use
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});

export const {login, logout} = authSlice.actions


export default authSlice.reducer;