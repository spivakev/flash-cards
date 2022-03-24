import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import appReducer from './appSlice'

export const store = configureStore({
  reducer: { appReducer },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
