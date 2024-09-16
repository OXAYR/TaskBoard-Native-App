import {configureStore} from '@reduxjs/toolkit';
import {todoReducer} from './Todos/todoSlice';
import {userReducer} from './User/userSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    user: userReducer,
  },
});
