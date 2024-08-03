import Navbar from "./components/navigationBar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}