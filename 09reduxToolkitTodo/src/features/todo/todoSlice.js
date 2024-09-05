import { createSlice, nanoid } from "@reduxjs/toolkit";

// here nanoid generate unique id and createSlice make a Reducer-----> in reduxToolkin, name of the reducer is "Slice"
// in initial satate we can keep "Array " and "Object"

export const initialState = {
    todos : [{id:1, text: "Hello world"}]
}


// create reducer

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // reducers is a property which have alwase property and function 
    reducers: {
        // properties of reducer is always access of state or action
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload //here value of userInput
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        delete: () => {},
        update: () => {}
    }
})


//  here os the export all the reducer fo further use -------->
export const {addTodo, removeTodo} = todoSlice.actions

// theis export for access for store kyuki ye aware nhi rahega to aapka koi bhi reducer kam nhi karega nhi hoga

export default todoSlice.reducer