import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const createTodo = createAsyncThunk(
  'todos/createTodos',
  async payload => {
    const config = {
      headers: {
        Authorization: `Bearer ${payload.token}`,
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post('item', payload.todo, config);
      console.log('here is the response ---------->', response.data);
      return response.data;
    } catch (e) {
      console.error('Error fetching todos:', e.response?.data?.message);
      throw new Error(e.message);
    }
  },
);

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get('items', config);
    console.log('here is the response ---------->', response.data.items.data);
    return response.data.items.data;
  } catch (e) {
    console.error('Error fetching todos:', e.response?.data?.message);
    throw new Error(e.message);
  }
});

export const fetchSingleTodo = createAsyncThunk(
  'todos/fetchSingleTodo',
  async payload => {
    const config = {
      headers: {
        Authorization: `Bearer ${payload.token}`,
        'Content-Type': 'application/json',
      },
    };

    try {
      console.log('here te todo===========>', payload.todoId, payload);
      const response = await axios.get(`item?todo=${payload.todoId}`, config);
      console.log('here is the response ---------->', response.data.items.data);
      return response.data.items.data;
    } catch (e) {
      console.error('Error fetching todos:', e.response?.data?.message);
      throw new Error(e.message);
    }
  },
);

export const editTodo = createAsyncThunk('todos/editTodo', async payload => {
  const config = {
    headers: {
      Authorization: `Bearer ${payload.token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.put(`items/${payload.todoId}`, config);
    console.log('here is the response ---------->', response.data.items.data);
    return response.data.items.data;
  } catch (e) {
    console.error('Error fetching todos:', e.response?.data?.message);
    throw new Error(e.message);
  }
});

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async payload => {
    const config = {
      headers: {
        Authorization: `Bearer ${payload.token}`,
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.put('items', config, payload.todoId);
      console.log('here is the response ---------->', response.data.items.data);
      return response.data.items.data;
    } catch (e) {
      console.error('Error fetching todos:', e.response?.data?.message);
      throw new Error(e.message);
    }
  },
);
