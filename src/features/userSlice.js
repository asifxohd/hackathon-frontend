import { createSlice } from "@reduxjs/toolkit";



const INITIAL_STATE = {
    user:null
}

const checkUserExist = () => {
    const user = localStorage.getItem('user');
    INITIAL_STATE.user = JSON.parse(user);
    return INITIAL_STATE
}



const userSlice = createSlice({
    name:'user',
    initialState:checkUserExist(),
    reducers:{
        deleteUserData: (state, action) => {
            state.user = null;
            localStorage.removeItem('user'); 
        },
        
        updateUserDetails : (state, action) => {
            console.log(action)
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload))
        }
    }
})

export const { deleteUserData,updateUserDetails } = userSlice.actions;

export default userSlice.reducer;