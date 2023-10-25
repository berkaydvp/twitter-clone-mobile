import React from 'react'
import logo from '../assets/logo.png'
import PostItemRanks from './PostItemRanks'
import { useSelector } from 'react-redux';
interface PostItemProps {
    tweetInfo: [];
   
  }

export default function PostItem(props:PostItemProps) {
    const createdAt = new Date(props.tweetInfo.createdAt *1);
    
  return (
    <div style={{backgroundColor:"black", borderColor:"#71767C"}} className='flex flex-row border-y-1 p-2 px-2'>
        <div className='text-white font-semibold text-sm pe-1'>
             <img src={logo} className='max-w-[35px]'/>
        </div>
        <div className='flex flex-col w-full'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row justify-start'>
                    <div className='pe-2'>
                        <span className='text-white text-sm font-semibold'>{props.tweetInfo.name} {props.tweetInfo.surname}</span>
                    </div>
                    <div className='flex flex-row'>
                        <div className='pe-2'>
                            <span style={{color:"#71767C"}} className='text-xs'>@{props.tweetInfo.nickName}</span>
                        </div>
                        <div>
                            <span style={{color:"#71767C"}} className=' text-xs'>{createdAt.toDateString()}</span>
                        </div>
                    </div>
                </div>
                <div className='pe-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#71767C" className="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                </div>
            </div>
            <div>
                <div className=' py-1 pe-2'>
                    <span style={{fontSize:"14px"}} className='text-white'>{props.tweetInfo.context}</span>
                </div>
            </div>
            <PostItemRanks chatRank={props.tweetInfo.repost} viewRank={props.tweetInfo.view} likeRank={props.tweetInfo.like} replyRank={props.tweetInfo.reply}/>
        </div>
    </div>
  )
}
