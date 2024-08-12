import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlice'
import todoReducer from './slices/todoSlice'

const store = configureStore({
  reducer: {
    usersList: usersReducer,
    todoList: todoReducer
  }
})

export default store
