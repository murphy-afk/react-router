import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="d-flex gap-2 py-3 bg-dark text-light ps-4">
        <NavLink className='nav-link' to='/'>Home</NavLink>
        <NavLink className='nav-link active' to='/about-us'>About us</NavLink>
        <NavLink className='nav-link' to='/products'>Products</NavLink>
      </nav>
    </>

  )
}