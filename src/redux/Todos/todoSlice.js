import {createSlice} from '@reduxjs/toolkit';
import {fetchTodos} from './todoThunk';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const todoReducer = todoSlice.reducer;
