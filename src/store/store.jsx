import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './slice/ProductSlice'
import authSlice from './slice/authSlice'
import AnarcWatchSlice from './slice/AnarcWatchSlice'


export const store = configureStore({
  reducer: {
    product : ProductSlice,
    anarcWatch : AnarcWatchSlice,
    auth: authSlice
  },
})