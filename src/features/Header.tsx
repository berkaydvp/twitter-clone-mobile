import React from 'react'
import logo from '../assets/logo.png'
import pp from '../assets/9b47a023caf29f113237d61170f34ad9.jpg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { mobileNavToggler } from '../redux/features/user/UiSlice'

export default function Header() {
    const [hideLogoX, setHideLogo] = useState("flex");
    const dispatch = useDispatch();
    const navbarToggler=()=>{
        dispatch(mobileNavToggler())
    }

    const location = useLocation();

   const hideLogo = ()=>{
    if(window.scrollY > 25 || window.scrollY >20)
        setHideLogo("none")
    else   
        setHideLogo("flex")
   }
   window.addEventListener('scroll', hideLogo);
  return (
    <div style={{borderBottomColor: "rgb(47, 51, 54)", borderBottom:"1px solid"}} className='bg-black flex flex-col sticky top-0 transition-all	'>
        <div onClick={navbarToggler} className='fixed top-3 left-5'>
             <img  style={{display:hideLogoX}} src={pp} className='max-w-[30px] rounded-full'/>
        </div>
        <div style={{display:hideLogoX}} className='flex justify-center pt-2'>
            <img  style={{display:hideLogoX}} src={logo} className='max-w-[35px]'/>
        </div>
        {(location.pathname === "/home" || location.pathname === "/home/following" || location.pathname === "/home/foryou")
             &&
         <div className='flex flex-row justify-center pt-1 '>
            <div className='relative w-6/12 flex flex-col justify-center items-center hover:bg-stone-900 focus:bg-black'>
                 <Link style={{color: (location.pathname == '/home/foryou') ? "white" : "#71767C",fontSize:"14px"}} className='font-sans  text-center py-1 text-white w-full ' to="/home/foryou">For You</Link>
                 {location.pathname == '/home/foryou' ? <span  className='absolute inset-x-0 bottom-0 m-auto rounded' style={{backgroundColor:"rgb(29, 155, 240)", height:"4px",width:"30%",}}></span>
                 :
                 <>
                 </>}
            </div>
            <div className='w-6/12 flex justify-center items-center py-3 relative hover:bg-stone-900 focus:bg-black'>
                 <Link style={{color: location.pathname == '/home/following' ? "white" : "#71767C", fontSize:"14px"}} className='font-sans text-s text-center py-1 w-full' to="/home/following">Following</Link>
                 {location.pathname == '/home/following' ? <span  className='absolute inset-x-0 bottom-0 m-auto rounded' style={{backgroundColor:"rgb(29, 155, 240)", height:"4px",width:"30%",}}></span>
                 :
                 <>
                 </>}
            </div>
         </div>
         }
        <div>
            
        </div>
    </div>
  )
}
