import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import { TodoForm, TodoItems } from './components';
// import TodoItem from './components/TodoItems';

function App() {
  // jo todo conntext se aa rhi hai usko store karene ke liye kuch na kuch chahiye to uske liye hm useState use karte hai
  // or esme empty array as a inpute rakhne ke mai resion hai starting me koi value nhi or eske karne application cras bhi nhi hogi
  const [todos, setTodos] = useState([]);

  //  Ab jitna bhi methode hai unka fomnction bana lete hai

  const addTodo = (todo) => {
    //  yeha pe jo input todo liya h wo use state ke todo se data nhi aa rha hai ye form me jo todo hai use data le rha hai 

    console.log("inside add to do : ", todo)
    // setTodos(todo) // agar hm yese kiye to purane jitne todo hoga usko delete karke ye sirf singlke todo add kar dega
    setTodos( (prev) => [{id: Date.now(), ...todo}, ...prev])

    console.log("todosos : ", todos)
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) =>  prev.map((prevTodo) => (prevTodo.id === id ? todo:prevTodo)));

    // niche wala bhi same function hai------>

    // setTodos((prev) => 
    //   // yeha map lagate hai previous todo ka value jo aaray me wo mil jayega
    //   prev.map((eachValue) => {
    //     if(eachValue.id === id){
    //       todo;
    //     }else{
    //       prevTodo;
    //     }
    //   })
    // );
 }

 const deleteTodo = (id) => {
  setTodos( (prev) => prev.filter((todo) => todo.id !== id))
 }

 const toggleComplete = (id) => {
   setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))

  //  same function niche likha hai ye sirf samjhne e liye eska use nhi karna hai 
//   setTodos((prev) => prev.map((prevTodo){
//     if (prevTodo.id === id) {
//       {...prevTodo, completed: !prevTodo.completed} // ye tru wala ka object return hua hai
      
//     }else{
//       prevTodo
//     }
//   }
//   ) )
//  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      {/* hm yeha pe ye sare method esliye direct import kara liye kyuki ye kam ka access hme provide deta hai */}
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}


// hme ik yesa method chahiye jo esme pahle ka data le kar aa skata hai to uske liye useEffact use karte hai -------->
// useEffact se hm jo data pahle se hai uso la sakte hai
// es UseEfface se hm jo sare todoes esme pade huye hai uskola sakte hai new add nhi kar rhe hai uske liye alage se banayenge
useEffect( () => {
  // jab tak react me hai tab tak localStorage direct access kar sakte hai
  // getitem ke time hme "key" se hi "value" mil jati hai  
  // and jo bhi value milti hai wo string me milti hai but hme JSON me chaiye to uske liye JSON me converted karte hai
  const todos = JSON.parse(localStorage.getItem("todos"));
  // yeha value milne pe hm cheack karenge ki value hai ya nhi nhi to app creash kar jayegi
  if(todos && todos.length > 0){
    setTodos(todos);
  }
}, []);

// yeha pe am todos me jo value de rhe ho usko hm local storage me add lar rhe hai
// esme hm setItem ka use karenhe to uske liye hme "key" or "keyValues" dena padega
useEffect( () => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos]);

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      {/* hm yeha pe ye sare method esliye direct import kara liye kyuki ye kam ka access hme provide deta hai */}
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                            <TodoItems todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
