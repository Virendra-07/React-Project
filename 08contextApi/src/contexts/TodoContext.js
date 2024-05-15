import { createContext, useContext } from "react";


export const TodoContext = createContext({
    // yeha pe ik value chahiye as a input but yeha inpute array hota hai kyuki sare object ik array me hi to store ho rha hai
    todos: [
        {
            id : 1,
            todo: "Todo message",
            completed : false

        }
    ],

    // /ab ye sare value ho ik function ke help se access karenge
    addTodo: (todo) => {}, // yeha jo todo liya hai wo esliye liya hai kyuki at the end hm value todo me hi to add kar rhe hai
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});


export const useTodo = () => {
    // console.log()
    // console.log(TodoContext)
    return useContext(TodoContext);
}


export const TodoProvider = TodoContext.Provider