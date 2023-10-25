import React, { useState } from 'react'
import NavBarLink from '../../ui/NavBarLink'
import AuthButton from '../../ui/AuthButton'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getTweets, postTweet } from '../../redux/features/tweet/TweetSlice'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import firebase from 'firebase/compat/app'
import { Timestamp } from 'firebase/firestore'
export default function Tweet() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [context, setContext] = useState("");
  const userInfo = useSelector((state)=>state.user);
  const now = Date.now();
    const tweetPostHandler = ()=>{
    dispatch(postTweet({
        uid: userInfo.user.uid,
        name:userInfo.user.name,
        surname:userInfo.user.surname,
        nickName:userInfo.user.nickname,
        context: context,
        createdAt: now,
        like: '0',
        reply: '0',
        repost: '0',
        view: '0'
    }))

    dispatch(getTweets());
    navigate("/home/foryou");
  }
  return (
    <div className='flex flex-column w-screen h-screen bg-black'>
       <div className='flex flex-row justify-between w-screen py-3 px-4'>
            <div onClick={()=>navigate(-1)}>
                <NavBarLink iconWidth="20" iconPadding="12px" icon="/src/assets/arrow-left.svg" fontWeight="700" fontsize="15px" textColor="white" backgroundColor="black" to=""></NavBarLink>
            </div>
            <div onClick={tweetPostHandler} className='text-white w-16 '>
                <AuthButton fontWeight='12px' textColor='white' backgroundColor='rgb(29, 155, 240)' to=''>Post</AuthButton>
            </div>
       </div>
       <div className='flex flex-col px-2 w-6/6 grow'>
          <div className='flex flex-row'>
              <div>
                <img width={48} src={logo}/>
              </div>
              <div className='flex flex-col grow'>
                  <div style={{ border:'1px solid rgb(83, 100, 113)'}} className='flex flex-row items-center rounded-3xl w-32 px-3 h-6'>
                    <NavBarLink fontWeight="600" fontsize="15px" textColor="rgb(29, 155, 240)" backgroundColor="black" to="">Everyone</NavBarLink>
                         <span className="pl-2">
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(29, 155, 240)" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                             </svg>
                        </span>
                  </div>
                  <div className='p-2'>
                      <textarea onChange={(e)=>setContext(e.target.value)} rows={5} cols={30} className='text-white text-lg focus:outline-none w-6/6' style={{backgroundColor:"black", color:"white", border:"none"}} placeholder='What is happening?!'/>
                  </div>
              </div>
              
          </div>
          <div className='flex flex-col px-2'>
              <div className='px-2'>
                    <NavBarLink fontsize='14px' iconWidth='15' iconPadding='5px' icon='/src/assets/world.svg' fontWeight='700' to='' backgroundColor='black' textColor='rgb(29, 155, 240)'>Everyone can reply</NavBarLink>  
              </div>
              <div className='py-3'>
                    <div style={{backgroundColor:"#2F3336", height:"1px"}} className='w-12/12'></div>
              </div>
              <div className='flex-row flex'>
                    <div className='ps-2'>
                        <NavBarLink iconWidth="18" iconPadding="12px" icon="/src/assets/card-image.svg" fontWeight="700" fontsize="15px" textColor="white" backgroundColor="black" to=""></NavBarLink>
                    </div>
                    <div className='ps-2'>
                        <NavBarLink iconWidth="18" iconPadding="12px" icon="/src/assets/gif.svg" fontWeight="700" fontsize="15px" textColor="white" backgroundColor="black" to=""></NavBarLink>
                    </div>
                    <div className='ps-2'>
                        <NavBarLink iconWidth="18" iconPadding="12px" icon="/src/assets/list-tweet.svg" fontWeight="700" fontsize="15px" textColor="white" backgroundColor="black" to=""></NavBarLink>
                    </div>
                    <div className='ps-2'>
                        <NavBarLink iconWidth="18" iconPadding="12px" icon="/src/assets/calender.svg" fontWeight="700" fontsize="15px" textColor="white" backgroundColor="black" to=""></NavBarLink>
                    </div>
                    <div className='ps-2'>
                        <NavBarLink iconWidth="18" iconPadding="12px" icon="/src/assets/geo-alt.svg" fontWeight="700" fontsize="15px" textColor="white" backgroundColor="black" to=""></NavBarLink>
                    </div>
              </div>
          </div>
       </div>
    </div>
  )
}
