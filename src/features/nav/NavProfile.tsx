import React from 'react'
import logo from '../../assets/logo.png'
import pp from '../../assets/9b47a023caf29f113237d61170f34ad9.jpg'

import { useSelector } from 'react-redux/es/hooks/useSelector';
export default function NavProfile() {
    const userInfo = useSelector((state)=>state.user);
    console.log(userInfo)
  return (
    <div className='flex flex-col'>
        <div className=''>
            <img className='w-2/12 rounded-full' src={pp}/>
        </div>
        <div className='flex flex-column '>
            <span className='text-white font-semibold text-'>{userInfo.user.name} {userInfo.user.surname}</span>
            <span style={{color:"rgb(113, 118, 123)"}} className="text-sm" >@{userInfo.user.nickname}</span>
        </div>
        <div className='flex flex-row'>
            <div>
                <span className='text-white text-xs font-semibold'>0</span>
                <span className='text-xs ps-1' style={{color:"rgb(113, 118, 123)"}}>Following</span>
            </div>
            <div className='ps-3'>
                <span className='text-white text-xs font-semibold'>0</span>
                <span className='text-xs ps-1' style={{color:"rgb(113, 118, 123)"}}>Followers</span>
            </div>
        </div>
    </div>
  )
}
