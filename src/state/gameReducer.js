// @flow
import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState.game, 
  reducers: {
    addItem(state, action) {
      state.levelItems.push(action.payload)
    },
    removeItem(state, action) {
      state.levelItems.filter(i => i !== action.payload)
    },
    triggerAction(state, action) {
      state.lastTriggeredAction = action.payload
    }
  }
})

export const { addItem, removeItem, triggerAction } = gameSlice.actions
export default gameSlice.reducer
