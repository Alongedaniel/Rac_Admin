import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api';
import userReducer from './redux/authSlice'
import orderReducer from './redux/orderSlice'

 export const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})