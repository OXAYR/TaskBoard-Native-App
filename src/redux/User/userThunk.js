import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userCredentials, thunkAPI) => {
    try {
      const response = await axios.post('login', userCredentials);
      console.log('here os the response------->', response.data);
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Login failed',
      );
    }
  },
);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userDetails, thunkAPI) => {
    try {
      const response = await axios.post('register', userDetails);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Registration failed',
      );
    }
  },
);
