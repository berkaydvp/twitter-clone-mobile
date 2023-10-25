import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './features/AppLayout'
import Error from './pages/error/Error'
import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Notifications from './pages/notifications/Notifications'
import Messages from './pages/messages/Messages.tsx'
import AuthLayout from './auth/AuthLayout.tsx'
import Login from './auth/Login.tsx'
import Register from './auth/Register.tsx'
import { useEffect, useState } from 'react'
import UnAuthHome from './auth/UnAuthHome.tsx'
import Tweet from './pages/tweet/Tweet.tsx'
import { auth} from '../firebase-config.tsx'
import { store } from './redux/app/store.tsx'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Profile from './features/profile/Profile.tsx'
function App() {

  
const user = useSelector((state)=> state.user)

  const routerAuthed = createBrowserRouter([
    {
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:'/',
          element:<Home/>,
          errorElement:<Error/>
        },
        {
          path:'/home',
          element:<Home/>,
          errorElement:<Error/>
        },
        {
          path:'/home/foryou',
          element:<Home/>,
          errorElement:<Error/>
        },
        {
          path:'/home/following',
          element:<Home/>,
          errorElement:<Error/>
        },
        {
          path:'/explore',
          element:<Explore/>,
          errorElement:<Error/>
        },
        {
          path:'/notifications',
          element:<Notifications/>
        },
        {
          path:'/messages',
          element:<Messages/>
        },
        {
          path:'/profile',
          element:<Profile/>
        },
      ]
    },
    {
      path:'/tweet',
      element:<Tweet/>
    }
    
  ])
  const unAuthedRouter = createBrowserRouter([
    {
      element:<AuthLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:'/login',
          element:<Login/>,
          errorElement:<Error/>
        },
        {
          path:'/register',
          element:<Register/>,
          errorElement:<Error/>
        },
        {
          path:'/*',
          element:<UnAuthHome/>
        }
      ]
    },
  ])
  const router = user.isLoggedIn ? routerAuthed : unAuthedRouter;
 
  return (
    <RouterProvider router={router}/>
  )
}

export default App
