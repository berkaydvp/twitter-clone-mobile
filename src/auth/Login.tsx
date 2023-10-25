import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import AuthButton from "../ui/AuthButton"
import { useState } from "react"
import { signIn } from "../redux/features/user/UserSlice"
import { useDispatch } from "react-redux"
import { getTweets } from "../redux/features/tweet/TweetSlice"
export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = ()=>{
    dispatch(signIn({email:email, password:password}));
    dispatch(getTweets());
    navigate("/home/foryou");
  }
  
  return (
    <div className="flex w-6/6 h-screen flex-col p-3 ">
        <div className="mx-auto">
          <Link to="/">
             <img width={60} src={logo}/>
          </Link>
        </div>
        <div className="flex flex-col w-5/6 m-auto h-3/6 my-auto">
          <div>
            <span className='text-white font-extrabold text-[24px] text'>X'e giriş yap</span>
          </div>
           <form className="flex flex-col mt-3 w-6/6">
               <input onChange={(e)=>setEmail(e.target.value)} style={{backgroundColor:"black", border:"2px solid #2F3336"}} className="h-12 rounded mt-2 text-white" placeholder="E-posta ya da kullanıcı adı "/>
               <input onChange={(e)=>setPassword(e.target.value)} type="password" style={{backgroundColor:"black", border:"2px solid #2F3336"}} className="h-12 rounded mt-2 text-white" placeholder="Şifreniz"/>
              <div onClick={submitHandler} className="mt-3">
                <AuthButton backgroundColor="white" textColor="black" to="" fontWeight="800">İleri</AuthButton>
              </div>
              <div >
                <AuthButton border="2px solid #2F3336" backgroundColor="black" textColor="white" to="" fontWeight="800">Şifreni mi unuttun?</AuthButton>
              </div>
           </form>
           <div className="mt-4">
              <span className="" style={{color:"#71767C"}}>Henüz hesabın yok mu?</span>
              <Link className="text-sky-400/100 ps-2" to="/register">Kaydol</Link>
           </div>
        </div>
        
    </div>
  )
}
