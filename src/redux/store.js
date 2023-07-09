import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from './weatherSlice.js'

export const store = configureStore({
  reducer: {
    weatherSlice: sliceReducer
  },
})