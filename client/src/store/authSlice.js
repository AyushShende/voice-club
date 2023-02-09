import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    otp: {
      phone: '',
      hash: '',
    },
  },
  reducers: {
    setAuth: (state, action) => {
      const { user } = action.payload;
      state.user = user;
      if (user === null) {
        state.isLoggedIn = false;
      } else {
        state.isLoggedIn = true;
      }
    },
    setOtp: (state, action) => {
      const { phone, hash } = action.payload;
      state.otp.phone = phone;
      state.otp.hash = hash;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, setOtp } = authSlice.actions;

export default authSlice.reducer;
