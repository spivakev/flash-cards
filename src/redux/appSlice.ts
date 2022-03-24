import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  title: string
}

const initialState: AppState = {
  title: '',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPageTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
  },
  extraReducers: {},
})

export const { setPageTitle } = appSlice.actions
export default appSlice.reducer

