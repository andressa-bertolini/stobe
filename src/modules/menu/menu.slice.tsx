import { createSlice } from '@reduxjs/toolkit';
import type { MenuState } from './menu.types';
import { fetchMenu } from './menu.service';

const initialState: MenuState = {
  menu: [],
  loading: {
    list: false,
  },
  currentPage: 1,
  totalPages: 1,
  totalItems: 0,
  error: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading.list = true;
        state.error = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading.list = false;
        state.menu = action.payload.menu;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading.list = false;
        state.error = action.error.message ?? 'Erro ao carregar menu';
      });
  },
});

export default menuSlice.reducer;