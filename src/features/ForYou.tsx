import React, { useEffect } from 'react'
import PostItem from './PostItem'
import { getTweets } from '../redux/features/tweet/TweetSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function ForYou() {
   const tweets = useSelector((state)=>state.tweet).tweets;
  return (
    <div>

         {tweets.map((tweetInfo) => {
              return <PostItem tweetInfo={tweetInfo} key={tweetInfo.id}></PostItem>
            })
         }
    </div>
  )
}