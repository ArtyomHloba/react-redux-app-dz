import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  toDo: [
    {
      id: uuidv4(),
      value: 'Make homework',
      isFavourite: false
    },
    {
      id: uuidv4(),
      value: 'Go to university',
      isFavourite: false
    }
  ]
}

const toDoSlice = createSlice({
  initialState,
  name: 'toDo',
  reducers: {
    removeToDo: (state, { payload }) => {
      const foundToDoIndex = state.toDo.findIndex(t => t.id === payload)
      if (foundToDoIndex !== -1) {
        state.toDo.splice(foundToDoIndex, 1)
      }
    },
    toggleFavourite: (state, { payload }) => {
      const foundFavourite = state.toDo.find(t => t.id === payload)
      if (foundFavourite) {
        foundFavourite.isFavourite = !foundFavourite.isFavourite
      }
    },
    createTodo: (state, { payload }) => {
      state.toDo.push({ value: payload.toDo, id: uuidv4(), isFavourite: false })
    }
  }
})

const { reducer, actions } = toDoSlice

export const { removeToDo, toggleFavourite, createTodo } = actions
export default reducer
