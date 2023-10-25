import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./nav/MobileNav";
import PostButton from "./PostButton";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { getTweets, getUserTweets } from "../redux/features/tweet/TweetSlice";
import { useEffect } from "react";

export default function AppLayout() {
  const mobileNav = useSelector((state)=>state.ui);
  const userInfo = useSelector((state)=>state.user);

  const dispatch = useDispatch();
  const location = useLocation();
  dispatch(getUserTweets(userInfo.user.uid));
  useEffect(()=>{
    console.log(location.pathname);
    console.log("değişti")
  },[location.pathname])
  dispatch(getTweets());  
  return (
    <div >
       {mobileNav.mobileNav && <MobileNav /> }
       {location.pathname === "/profile" ?  <></>:<Header/> }
        <Outlet/>
        <Footer/>
        <PostButton/>
    </div>
  )
}
