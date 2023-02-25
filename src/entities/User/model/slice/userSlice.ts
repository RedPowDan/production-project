import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {

};

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducers } = userSlice;