import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import AuthButton from '../ui/AuthButton'
import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { store } from '../redux/app/store';
import  { db } from '../../firebase-config'
import { useNavigate } from 'react-router-dom';
import { login, setUser, signUp, userSlice } from '../redux/features/user/UserSlice';

export default function Register() {
  const[name, setName] =useState("")
  const[nickname, setNickname] =useState("")
  const[surname, setSurname] =useState("")
  const[email, setEmail] =useState("")
  const[password, setPassword] =useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const signUpHandler =()=>{
     dispatch(signUp({email:email, password:password, name:name, surname:surname, nickname:nickname}));
     navigate("/login");
 }
  return (
    <div className="flex w-6/6 h-screen flex-col p-3 ">
        <div className="mx-auto">
          <Link to="/">
             <img width={60} src={logo}/>
          </Link>
        </div>
        <div className="flex flex-col w-5/6 mx-auto mt-4">
          <div>
            <span className='text-white font-extrabold text-[24px] text'>Hesabını oluştur</span>
          </div>
           <form className="flex flex-col mt-3 w-6/6">
               <input onChange={(e)=>setName(e.target.value)} style={{backgroundColor:"black", border:"2px solid #2F3336"}} className="h-12 rounded mt-2 text-white" placeholder="İsminiz "/>
               <input onChange={(e)=>setSurname(e.target.value)} style={{backgroundColor:"black", border:"2px solid #2F3336"}} className="h-12 rounded mt-3 text-white" placeholder="Soyisminiz "/>
               <input onChange={(e)=>setNickname(e.target.value)} style={{backgroundColor:"black", border:"2px solid #2F3336"}} className="h-12 rounded mt-3 text-white" placeholder="Kullanıcı adınız"/>

               <input onChange={(e)=>setEmail(e.target.value)} style={{backgroundColor:"black", border:"2px solid #2F3336"}} className="h-12 rounded mt-3 text-white" placeholder="E-posta Adresiniz "/>
               <input onChange={(e)=>setPassword(e.target.value)} type='password' style={{backgroundColor:"black", border:"2px solid #2F3336"}} className="h-12 rounded mt-3 text-white" placeholder="Şifreniz"/>
              <div onClick={signUpHandler} className="mt-3">
                <AuthButton backgroundColor="white" textColor="black" to="" fontWeight="800">Kayıt Ol</AuthButton>
              </div>
           </form>
           <div className="mt-4">
              <span className="" style={{color:"#71767C"}}>Zaten hesabın var mı?</span>
              <Link className="text-sky-400/100 ps-2" to="/login">Giriş Yap</Link>
           </div>
        </div>
        
    </div>
  )
}
