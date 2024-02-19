import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name : "profile",
    initialState : {
        openFormDialog : false,
        openPasswordDialog : false,
     },
    reducers : {
        toogleFormDialog : (state, action) => {
            state.openFormDialog = action.payload;
            // alert(`${action.payload}`);
        } ,
        tooglePasswordDialog : (state, action) => {
            state.openPasswordDialog = action.payload;
            // alert(`${action.payload}`);
        }
    }
})

export const {toogleFormDialog  , tooglePasswordDialog} = profileSlice.actions;

export default profileSlice.reducer;