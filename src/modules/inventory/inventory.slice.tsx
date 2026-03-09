import { createSlice } from '@reduxjs/toolkit';
import type { InventoryState } from './inventory.types';
import { fetchInventory } from './inventory.service';

const initialState: InventoryState = {
  inventory: [],
  loading: {
    list: false,
  },
  currentPage: 1,
  totalPages: 1,
  totalItems: 0,
  error: null,
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.pending, (state) => {
        state.loading.list = true;
        state.error = null;
      })
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.loading.list = false;
        state.inventory = action.payload.inventory;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchInventory.rejected, (state, action) => {
        state.loading.list = false;
        state.error = action.error.message ?? 'Erro ao carregar produtos';
      });
  },
});

export default inventorySlice.reducer;