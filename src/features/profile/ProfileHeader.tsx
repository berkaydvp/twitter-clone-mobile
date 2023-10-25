import React from 'react'
import AuthButton from '../../ui/AuthButton'
import NavBarLink from '../../ui/NavBarLink'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function ProfileHeader() {
  const userInfo = useSelector((state)=>state.user);
  return (
    <div className='flex flex-col bg-black'>
        <div style={{border:"solid 1px black"}} className='h-[81px] w-[81px] absolute z-10 bg-slate-800 ms-3 mt-20 rounded-full'>

        </div>
        <div  className='w-6/6 relative' style={{height:"125px", backgroundColor:"#71767C"}}></div>
        <div className='flex justify-between bg-black'>
          
            <div>
    
            </div>
            <div style={{border:"1px solid #536471", borderRadius:"15px"}} className='mt-2 mr-2 px-2 py-1'>
                <NavBarLink padding='4px 14px' backgroundColor='black' textColor='white' to='' borderRadius='15px' fontsize='12px' fontWeight='bold'>Edit Profile</NavBarLink>
            </div>
            
        </div>
        <div className='flex flex-col mt-2 px-3'>
            <div>
                <span style={{fontFamily: ""}} className='text-white font-extrabold text-[20px] font-mono'>{userInfo.user.name}{userInfo.user.surname}</span>
            </div>
            <div className=''>
                <span style={{color:"#71767C"}} className='text-s'>@{userInfo.user.nickname}</span>
            </div>
        </div>
        <div>
          <div className='py-2 px-3'>
              <NavBarLink iconWidth="18" iconPadding="12px" icon="/src/assets/calender.svg" fontWeight="400" fontsize="13px" textColor="#71767c" backgroundColor="black" to="">Joined April 2023</NavBarLink>
          </div>
        </div>
        <div className='flex flex-row px-3'>
            <div>
                <span className='text-white text-xs font-semibold'>0</span>
                <span className='text-xs ps-1' style={{color:"rgb(113, 118, 123)"}}>Following</span>
            </div>
            <div className='ps-3'>
                <span className='text-white text-xs font-semibold'>0</span>
                <span className='text-xs ps-1' style={{color:"rgb(113, 118, 123)"}}>Followers</span>
            </div>
        </div>
        <div>
          <div className='flex flex-row'>
              <div className='w-3/12 flex justify-center items-center py-3 relative hover:bg-stone-900 focus:bg-black'>
                 <Link style={{color: "white", fontSize:"14px"}} className='font-sans text-s text-center py-1 w-full' to="">Posts</Link>
                  <span  className='absolute inset-x-0 bottom-0 m-auto rounded' style={{backgroundColor:"rgb(29, 155, 240)", height:"4px",width:"30%",}}></span>    
               </div>
               <div className='w-3/12 flex justify-center items-center py-3 relative hover:bg-stone-900 focus:bg-black'>
                 <Link style={{color: "#71767C", fontSize:"14px"}} className='font-sans text-s text-center py-1 w-full' to="">Replies</Link>
               </div>
               <div className='w-3/12 flex justify-center items-center py-3 relative hover:bg-stone-900 focus:bg-black'>
                 <Link style={{color: "#71767C", fontSize:"14px"}} className='font-sans text-s text-center py-1 w-full' to="">Media</Link>
               </div>
               <div className='w-3/12 flex justify-center items-center py-3 relative hover:bg-stone-900 focus:bg-black'>
                 <Link style={{color: "#71767C", fontSize:"14px"}} className='font-sans text-s text-center py-1 w-full' to="">Likes</Link>
               </div>
          </div>
          <div style={{backgroundColor:"#2F3336", height:"1px"}} className='w-12/12'></div>
        </div>
    </div>
  )
}
