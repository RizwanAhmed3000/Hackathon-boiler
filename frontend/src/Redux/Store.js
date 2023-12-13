import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AuthSlice from './Slices/authSlice'

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
    }
})