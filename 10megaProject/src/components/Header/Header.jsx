import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// useSelector esliye liya gya hai ki hm store me cheack kar sake ki user Login hai ya logout

function Header() {
  const authStatus = useSelector( (state) => state.auth.status)
  // const authStatus = useSelector( (state) => state.auth.status);
  // console.log(authStatus)
  const navigate = useNavigate();
// here is the page routing

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    }
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
          </div>

          {/* yeha pe hm routing ka kam kar rhe hai  */}
          <ul>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={ () => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
            )}

            {/* yeha pe hm agar user logedin hai to usko logout button show kara do */}
            {/* if "authStatus" is true then show this value "()" */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>

    </header>
  )
}

export default Header
