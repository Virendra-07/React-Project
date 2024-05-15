import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoItems({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo) // yeha ik todo jo pass kiya hai wo hai fir uske ander todo ke message ko eddit kar rhe hai esliye byDefault pass kiye hai
    const {deleteTodo, updateTodo, toggleComplete} = useTodo();

    const editTodo = () => {
        // update 2 value leta hai ik id jo pass kiya hai or dusra jo todo lega
        //  but yeha todo object hai to uske pahle spreade kiya hai fir sabko nhi change kiye hai sirf uske todoMessage ko change kiya hai
        updateTodo(todo.id, {...todo, todo:todoMsg});
        setIsTodoEditable(false);
    }

    const toggleCompleted = () =>{
        toggleComplete(todo.id); // yeha sirf id esliye pass hua hai ki eska defination hmne pahle hi likha hai sirf argumnet pass kiya hai yeha pe
    }

    return (
        
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black 
            ${
                todo.completed ? "bg-[#d73a3a]" : "bg-[#8131be]"
            }`}
        >
            {/* <p>the value = {todo.todo} </p> */}
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed} // ye mera cheackBox check hai ya nhi hai ese check karenge
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItems;
