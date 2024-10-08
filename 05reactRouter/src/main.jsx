import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'


// ye ik methode hai routing ka ------>>>>
// const  router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout />,
//     children: [
//       {
//         path : "",
//         element : <Home />
//       },{
//         path : "about",
//         element : <About />
//       },
//       {
//         path : "contact",
//         element : <Contact />
//       },
//       {
//         path : "github",
//         element : <Github />
//       },
//       {
//         path : "user",
//         element : <User />
//       },
//     ]
//   }
// ])

// ye dusra method hai routing ka -------->>>
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route 
        loader={githubInfoLoader}
        path='github' element={<Github />} />
      <Route path='user/:userid' element={<User />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> yeha pe esko esliye hata rahe hai kyuki hm direct 
                sara page randring karna cha rhe hai but hm app.jsx me bhi randar kar sakte hai or eske through access kar saktre hai */}

  {/* hm direct yeha ik provider lenge jo hme direct page rander karwa dega */}
   <RouterProvider router={router} />
  </React.StrictMode>,
)
