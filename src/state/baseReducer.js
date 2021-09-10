import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

const baseSlice = createSlice({
  name: 'base',
  initialState: initialState.base, 
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload)
    },
    removeItem(state, action) {
      state.items.filter(i => i !== action.payload)
    }
  }
})

export const { addItem, removeItem } = baseSlice.actions
export default baseSlice.reducer
