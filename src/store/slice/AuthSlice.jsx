import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
  };

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        registerUser: (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.user = action.payload;
            toast.success('Registration Successful!');
          },
          loginUser: (state, action) => {
            const savedUser = JSON.parse(localStorage.getItem('user'));
            if (
              savedUser &&
              savedUser.email === action.payload.email &&
              savedUser.password === action.payload.password
            ) {
              state.user = savedUser;
              toast.success('Login Successful!');
            } else {
                toast.error('Invalid email or password');
            }
          },
          logoutUser: (state) => {
            localStorage.removeItem('user');
            state.user = null;
            toast.info('Logged out');
          },
    }
})

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;