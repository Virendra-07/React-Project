// import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
       This is Todo by using redux Toolkit
    </h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
