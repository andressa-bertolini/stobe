import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '@/modules/login/login.slice';
import userReducer from '@/modules/login/user.slice';
import inventoryReducer from '@/modules/inventory/inventory.slice';
import menuReducer from '@/modules/menu/menu.slice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    inventory: inventoryReducer,
    menu: menuReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch