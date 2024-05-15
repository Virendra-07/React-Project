import React, { useContext, useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo(); // form ke liye add todo chahiye to wo context se liya hai but wo to usetodo me return kar rha hai esliye wha se liya

    // yeha pe method bana hai add karne liye form me ye mrthod hai to event trigar hoga hi
    const addTodoForm = (e) => {
        // console.log("ssdfdfdd")
        e.preventDefault();
        // console.log(e)
        // console.log(todo)
        // console.log("abcd : ", addTodo)
        if(!todo) return

        // addTodo(todo) // yha pe string pass karne se galat ho jayega kyukihmse addTodo me return object kiya hai to yeha string pass karne se error aayega
        
        //  ------------------->>>>>>>>>

        // addTodo({id: Date.now(), todo:todo, completed:false})
        // yeha pe object me sare parameter pass kiya jayega jo context me hmne object banane ke time pe kiya hai
        // hmne id ke liye pahle hi pass kar diya hai to usko remove kar sakte hai
        //  agat key or value ka name same ho to hm koi ik hi likh sakte hai 
        // now finnal method is
        addTodo({todo, completed:false});
        setTodo("");
    }

    return (
        <form onSubmit={addTodoForm} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={ (e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

