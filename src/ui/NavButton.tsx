
import { Link } from 'react-router-dom'

export default function NavButton(props: { text: string, to: string , children:JSX.Element}) {
  return(
   
      <Link to={props.to}><span>{props.children}</span><span>{props.text}</span></Link>
  )
}
