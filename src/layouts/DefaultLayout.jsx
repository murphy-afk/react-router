import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Outlet />
      
<footer>SONO FOOTER</footer>
    </>
  );
}