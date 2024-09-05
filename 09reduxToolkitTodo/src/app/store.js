import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'


// configureStore take object as a parameter in most of case
export const store = configureStore({
    reducer: todoReducer
})