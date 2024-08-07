import Navbar from "./Components/NavigationBar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
// import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
        <Navbar />
        {/* <Outlet /> */}
        <Footer />
    </>
  )
}