import React from 'react'
import google from '../assets/google.svg'
import { Link } from 'react-router-dom'

interface AuthButtonProps {
    backgroundColor: string;
    icon?: string;
    textColor:string;
    to:string;
    children?: string | JSX.Element | JSX.Element[] ;
    fontWeight:string;
    border?:string;
    borderRadius?:string;
    fontsize?:string;
    iconPadding?:string;
    iconWidth?:string;
    padding?:string;
  }

export default function NavBarLink(props: AuthButtonProps) {
  return (
    <Link className='flex flex-row items-center' style={{backgroundColor:props.backgroundColor, color:props.textColor, fontWeight:props.fontWeight,fontSize:props.fontsize, borderRadius:props.borderRadius, padding:props.pad}} to={props.to}>
        <span style={{paddingRight:props.iconPadding}}><img width={props.iconWidth} src={props.icon}></img></span>
        <span>{props.children}</span>
    </Link>
  )
}
