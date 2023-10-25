import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div style={{height:"100vh",width:"100vw"}} className='bg-black'>
        <Outlet/>
    </div>
  )
}
