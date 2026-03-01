import { createSlice } from '@reduxjs/toolkit';
import type { UserState } from './login.types';

const initialState: UserState = {
  user: {
    id: 1,
    name: 'andressa',
    role: 'admin',
    branches: [1,2,3]
  },
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: () => {}
});

export default loginSlice.reducer;