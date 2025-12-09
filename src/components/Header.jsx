import { NavLink } from "react-router-dom";

export default function Header() {
  return(
    <>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about-us'>About us</NavLink>
    <NavLink to='/products'>Products</NavLink>
    </>
    
  )
}