import React from 'react'
import { useLocation } from 'react-router-dom'
import Following from '../../features/Following';
import ForYou from '../../features/ForYou';
import MobileNav from '../../features/nav/MobileNav';
export default function Home() {
  const location = useLocation();
  if(location.pathname == '/home/following')
    return(
      <Following/>
    )
  return (
    <div>
      <ForYou/>
    </div>
  )
}
