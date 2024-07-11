import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <header className="nav-bar bg-gray-800 text-white px-4 py-2 flex justify-between items-center"> 
            <div className="logo-section">
                <h3 className="logo text-2xl font-bold">REAL STATE</h3>
            </div>
            <div className="facility-section">
                <nav className="flex space-x-4">
                    <NavLink to="/" className="text-base hover:text-gray-400">Home</NavLink>
                    <NavLink to="/service" className="text-base hover:text-gray-400">Services</NavLink>
                    <NavLink to="/about" className="text-base hover:text-gray-400">About</NavLink>
                </nav>
            </div>
            <div className="button-section">
                <button className="button bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none">Contact</button>
            </div>
        </header>
    </>
  )
}   
