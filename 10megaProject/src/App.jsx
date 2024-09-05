import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice" 
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'


function App() {
const [loading, setLoading] = useState(true);
const dispatch = useDispatch()

// teaking useEffact service and ask to user logedIn or not?
useEffect(() => {
  authService.getCurrentUser()
     .then((userData) => {
      //  agar current user mil gya hai to
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
     })
     .finally(() => setLoading(false))
}, [])

// ---------->>>>>
//  here is the access of the environment variable 
// console.log(process.env.REACT_APP_APPWRITE_URL) // here is the access or ".env " when our project is created using of react but this project is crete using vite so this is nit access these file
//  write approch to access of vite creted React project is ----->
// console.log(import.meta.env.VITE_APPWRITE_URL)
// ---------->>>>> ye ik section hai
 
// here is return according to our need which is call "Conditional rendering"-------->
  return !loading ? ( 
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO:  <Outlet />
        </main>
        <Footer />

      </div>

    </div> 
  ) : null;
}

export default App

// ----------->>>>>>>>>>

