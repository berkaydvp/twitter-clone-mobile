import React from 'react'
import NavBarLink from '../../ui/NavBarLink'
import { useDispatch } from 'react-redux'
import { mobileNavToggler } from '../../redux/features/user/UiSlice';

export default function NavBarLinks() {
  const dispatch = useDispatch();
  const navDisplayHandler = ()=>{
        dispatch(mobileNavToggler());
    }
  return (
    <div className='flex flex-col'>
      <div onClick={navDisplayHandler}>
          <NavBarLink iconPadding='20px' iconWidth='25' icon='/src/assets/person.svg' fontsize='24px' backgroundColor='black' textColor='white' to='/profile' fontWeight='500'>Profile</NavBarLink>
      </div>
      <div className='mt-4'>
         <NavBarLink iconPadding='20px' iconWidth='25' icon='/src/assets/verify.svg' fontsize='24px' backgroundColor='black' textColor='white' to='' fontWeight='500'>Verified</NavBarLink>
      </div>
      <div className='mt-4'>
         <NavBarLink iconPadding='20px' iconWidth='25' icon='/src/assets/list.svg' fontsize='24px' backgroundColor='black' textColor='white' to='' fontWeight='500'>Lists</NavBarLink>
      </div>
      <div className='mt-4'>
          <NavBarLink iconPadding='20px' iconWidth='25' icon='/src/assets/bookmark.svg' fontsize='24px' backgroundColor='black' textColor='white' to='' fontWeight='500'>Bookmarks</NavBarLink>
      </div>
      <div className='mt-4'>
          <NavBarLink iconPadding='20px' iconWidth='25' icon='/src/assets/people.svg' fontsize='24px' backgroundColor='black' textColor='white' to='' fontWeight='500'>Communities</NavBarLink>
      </div>
      <div className='mt-4'>
          <NavBarLink iconPadding='20px' iconWidth='25' icon='/src/assets/money.svg' fontsize='24px' backgroundColor='black' textColor='white' to='' fontWeight='500'>Monetization</NavBarLink>
      </div>

    </div>
  )
}
