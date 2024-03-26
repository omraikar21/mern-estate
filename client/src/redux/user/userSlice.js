import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        sign_InStart: (state) => {
            state.loading = true;
        },
        sign_InSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        sign_InFailure: (state, action) => {

            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { sign_InStart, sign_InSuccess, sign_InFailure } = userSlice.actions;

export default userSlice.reducer;