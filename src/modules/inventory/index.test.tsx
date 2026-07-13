import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import inventoryReducer from './inventory.slice';
import userReducer from '@/modules/login/user.slice';
import Inventory from './index';

jest.mock('@/services/api', () => ({
  api: jest.fn(() =>
    Promise.resolve({
      data: { content: [], totalPages: 1, totalItems: 0 },
    }),
  ),
}));

function renderInventory() {
  const store = configureStore({
    reducer: {
      inventory: inventoryReducer,
      user: userReducer,
    },
  });

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/1/']}>
        <Routes>
          <Route path="/:branchId/*" element={<Inventory />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );
}

describe('Inventory', () => {
  test('should render inventory title', () => {
    renderInventory();

    expect(
      screen.getByRole('heading', { level: 1, name: /stock inventory/i }),
    ).toBeInTheDocument();
  });
});
