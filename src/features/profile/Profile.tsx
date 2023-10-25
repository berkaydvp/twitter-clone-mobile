import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBarLink from '../../ui/NavBarLink';
import ProfileHeader from './ProfileHeader';
import ProfilePosts from './ProfilePosts';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTweets } from '../../redux/features/tweet/TweetSlice';

export default function Profile() {
    const navigate = useNavigate();
    const userInfo = useSelector((state)=>state.user);
    const tweets = useSelector((state)=>state.tweet).userTweets;
  return (
        <div>
            <div style={{height : "53px"}} className='flex bg-black  px-4'>
                 <div className='flex justify-center' onClick={()=>navigate(-1)}>
                      <NavBarLink iconWidth="20" iconPadding="12px" icon="/src/assets/arrow-left.svg" fontWeight="700" fontsize="15px" textColor="white" backgroundColor="black" to=""></NavBarLink>
                  </div>
                  <div className='flex flex-col py-1 ms-3'>
                        <div className=''>
                              <span style={{fontFamily: ""}} className='text-white font-extrabold text-[14px] font-mono'>{userInfo.user.name}{userInfo.user.surname}</span>
                        </div>
                        <div className="flex justify-start">
                                <span style={{color:"#71767C"}} className='text-xs'>{tweets.length} posts</span>
                        </div>
                  </div>
            </div>
            <div>
                  <ProfileHeader/>
            </div>
            <div>
            {tweets.map((tweetInfo) => {
              return <ProfilePosts tweetInfo={tweetInfo} key={tweetInfo.id}></ProfilePosts>
            })
         }
            </div>
        </div>
  )
}
