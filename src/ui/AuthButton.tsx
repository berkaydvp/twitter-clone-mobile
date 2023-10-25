import { Link } from "react-router-dom";
import Googlesvg from "./Googlesvg";
import Applesvg from "./Applesvg";

interface AuthButtonProps {
    backgroundColor: string;
    icon?: string;
    textColor:string;
    to:string;
    children: string | JSX.Element | JSX.Element[] ;
    fontWeight:string;
    border?:string;
    padding?:string;
    fontsize?:string;
  }

export default function AuthButton(props: AuthButtonProps) {
  return (
    <Link to={props.to} className="w-6/6 h-11 justify-center flex-row items-center rounded-3xl py-2" style={{backgroundColor:props.backgroundColor, color:props.textColor, display:"flex", fontWeight:props.fontWeight, border:props.border, padding:props.padding}}>
         {props.icon == "google" && <Googlesvg/>}
         {props.icon == "apple" && <Applesvg/>}
        <span style={{fontSize:props.fontsize}} className="text-center text-sm ">{props.children}</span>
    </Link>
  )
}
