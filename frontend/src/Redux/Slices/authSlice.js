import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    user: null,
    // token: null,
    error: '',
};

const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {
        loginPending: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload.user;
            // state.token = payload.token;
        },
        loginFailed: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.message;
        },
        logout: (state) => {
            state.isLoading = false;
            state.user = null;
            state.error = false;
        },
    }
});

const { reducer, actions } = AuthSlice;

export const { loginPending, loginSuccess, loginFailed, logout } = actions;

export default reducer;
