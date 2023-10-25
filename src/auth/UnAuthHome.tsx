import React from 'react'
import logo from '../assets/logo.png'
import AuthButton from '../ui/AuthButton'

export default function UnAuthHome() {
  return (
    <div className="flex flex-col py-4 px-4">
        <div className='ps-1'><img style={{width:"60px"}} src={logo}/></div>
        <div className='mt-8 mb-3 px-1'>
          <h1 style={{lineHeight:"52px"}} className='text-white font-extrabold text-[40px] text'>Şu anda olup <br/> bitenler</h1>
        </div>
        <div className='mt-6'>
          <h4 className='text-white font-extrabold text-[28px] text'>Hemen Katıl.</h4>
          <div className='mt-3 w-11/12'>
            <AuthButton to='/login' icon='google' textColor='black' backgroundColor='white' fontWeight='400'>Google ile kaydolun</AuthButton>
          </div>
          <div className='mt-3 w-11/12'>
            <AuthButton to='/login' icon='apple' textColor='black' backgroundColor='white' fontWeight='600'>Apple ile kaydolun</AuthButton>
          </div>
          <div className='flex flex-row items-center mt-1'>
            <div style={{backgroundColor:"#2F3336", height:"1px"}} className='w-5/12'></div>
            <div><span className='text-white text-sm'>veya</span></div>
            <div style={{backgroundColor:"#2F3336", height:"1px"}} className='w-5/12'></div>
          </div>
          <div className='mt-2 w-11/12'>
            <AuthButton to='/register' backgroundColor='#1D9BF0' textColor='white' fontWeight='600'>Hesap Oluştur</AuthButton>
          </div>
          <div style={{lineHeight:"15px"}}>
            <span  style={{color:"#71767B", lineHeight:"1px"}} className='text-xs'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</span>
          </div>
        </div>
        <div className='text-white mt-16'>
           <span className='text-white font-extrabold text-[17px] text'>Zaten Hesabın var mı?</span>
        </div>
        <div className='mt-2'>
           <AuthButton to='/login' border='2px solid #2F3336' backgroundColor='black' textColor='#1d9bf0' fontWeight='800'>Giriş Yap</AuthButton>
        </div>
    </div>
  )
}
