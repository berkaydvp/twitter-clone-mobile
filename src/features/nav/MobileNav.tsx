import { useState } from "react";
import NavBarLink from "../../ui/NavBarLink";
import NavBarLinks from "./NavBarLinks";
import NavProfile from "./NavProfile";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { mobileNavToggler } from "../../redux/features/user/UiSlice";
import { logout } from "../../redux/features/user/UserSlice";

export default function MobileNav() {
    const [active, setActive] = useState(false)
    const dispatch = useDispatch();
    const signOutHandler = ()=>{
        dispatch(logout());
    }
    const navDisplayHandler = ()=>{
        dispatch(mobileNavToggler());
    }

  return (
    <div style={{backgroundColor:"rgb(91 112 131 / 40%)"}} className='w-screen h-screen fixed z-50 flex flex-row'>
        <div className="w-9/12 p-3 bg-black h-screen flex flex-col navAnimation">
            <NavProfile/>
            <div className="pt-4">
                <NavBarLinks/>
            </div>
            <div className="w-11/12 pt-3">
                 <div style={{backgroundColor:"#2F3336", height:"1px"}} className='w-12/12'></div>
            </div>
            <div className="mt-3 flex flex-col">
                <div onClick={()=>setActive(!active)} className="flex flex-row justify-between items-center">
                    <NavBarLink fontWeight="700" fontsize="15px" textColor="white" backgroundColor="black" to="">Settings and Support</NavBarLink>
                    <span className="pe-3">
                         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-chevron-down" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                         </svg>
                    </span>
                </div>
                {active && <div onClick={signOutHandler} className="mt-2">
                      <NavBarLink iconWidth="20" iconPadding="12px" icon="/src/assets/logout.svg" fontWeight="700" fontsize="15px" textColor="white" backgroundColor="black" to="">Log out</NavBarLink>
                </div>}
            </div>
        </div>
        <div onClick={navDisplayHandler} className="w-3/12 h-screen">
            
        </div>
    </div>
  )
}
