import { NavLink } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <div className="container d-flex flex-column align-items-center ">

        <div className="btn-container d-flex justify-content-around w-50 pt-2">
          <NavLink className='btn border' to='/about-us'>About us</NavLink>
          <NavLink className='btn border' to='/products'>Products</NavLink>
        </div>
        <h1 className="text-center pt-5 pb-2">Welcome to Boomazon</h1>
        <Carousel />
      </div>
    </>
  )
}