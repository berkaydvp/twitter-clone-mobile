import React from 'react'
import NavBarLink from '../ui/NavBarLink'
interface PostItemRanksProps{
    chatRank:string;
    replyRank:string;
    likeRank:string;
    viewRank:string;
}
export default function PostItemRanks(props:PostItemRanksProps) {
  return (
    <>
        <div className='flex flex-row justify-between py-2'>
              <NavBarLink iconWidth="18" iconPadding="5px" icon="/src/assets/chat.svg" fontWeight="400" fontsize="13px" textColor="#71767C" backgroundColor="black" to="">{props.chatRank}</NavBarLink>    
              <NavBarLink iconWidth="18" iconPadding="5px" icon="/src/assets/arrow-return-right.svg" fontWeight="400" fontsize="13px" textColor="#71767C" backgroundColor="black" to="">{props.viewRank}</NavBarLink>       
              <NavBarLink iconWidth="18" iconPadding="5px" icon="/src/assets/heart.svg" fontWeight="400" fontsize="13px" textColor="#71767C" backgroundColor="black" to="">{props.likeRank}</NavBarLink>       
              <NavBarLink iconWidth="18" iconPadding="5px" icon="/src/assets/text-right.svg" fontWeight="400" fontsize="13px" textColor="#71767C" backgroundColor="black" to="">{props.viewRank}</NavBarLink>       
              <NavBarLink iconWidth="18" iconPadding="15px" icon="/src/assets/upload.svg" fontWeight="400" fontsize="13px" textColor="#71767C" backgroundColor="black" to=""></NavBarLink>       
        </div>
    </>
  )
}
