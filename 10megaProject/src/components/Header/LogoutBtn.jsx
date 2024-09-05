import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'


function LogoutBtn() {
    // create one dispatch method for dispatching the function
    const dispatch = useDispatch()

    // one logout handler create bcz here is a a logout 
    const logoutHandler = () => {
        // here call logout then recived a promises that is handle by ".then"
        authService.logout().then( () => {
            // if user is logout the dispatch logout method jise sare state change ho jaye
            dispatch(logout());

        })
    }
  return (
    <button 
        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn
