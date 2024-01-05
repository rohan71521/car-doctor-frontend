import {  NavLink } from "react-router-dom";
import logo from '../../assets/icons/logo.svg'


function Header() {
    

    const links = <>
    <NavLink to="/" className="lg:mr-7 font-bold hover:text-theme-color">Home</NavLink>
    <NavLink to="/about" className="lg:mr-7 font-bold hover:text-theme-color">About</NavLink>
    <NavLink to="/services" className="lg:mr-7 font-bold hover:text-theme-color">Services</NavLink>
    <NavLink to="/blog" className="lg:mr-7 font-bold hover:text-theme-color">Blog</NavLink>
    <NavLink to="/contact" className="lg:mr-7 font-bold hover:text-theme-color">Contact</NavLink>
    </>
    return(
<div className="navbar bg-base-100 pb-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {
            links
        }
      </ul>
    </div>
    <a className="text-3xl">
        {/* <span className="text-theme-color font-extrabold"> Doctor</span>  */}
        <img className="w-16 md:w-20" src={logo} alt="Car Doctor" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {
            links
        }
    </ul>
  </div>
  <div className="navbar-end">
  <button className="button primary-outline-button">appointment</button>
  </div>
</div>
    )
}

export default Header;