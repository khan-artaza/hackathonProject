import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './slice/ProductSlice'
import AnarcWatchSlice from './slice/AnarcWatchSlice'

export const store = configureStore({
  reducer: {
    product : ProductSlice,
    anarcWatch : AnarcWatchSlice
  },
})