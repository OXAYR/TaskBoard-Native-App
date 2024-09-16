import {createSlice} from '@reduxjs/toolkit';
import {registerUser, loginUser} from './userThunk';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    tokken: '',
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log('here os the user ----->', state.user, action.payload.token);
      state.user = action.payload;
      state.tokken = action.payload.token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // Handle the error payload
    });
  },
});

export const userReducer = userSlice.reducer;
