
import { useContext } from 'react';
import logo from '../../assets/icons/logo.svg'
import { IoIosLogIn , IoIosLogOut} from "react-icons/io";
import { UserContext } from '../../contextAPI/AuthContext';
import { Link, } from 'react-router-dom';

function Header({links}) {
  
 const {user , logOut , setLoading ,loading } = useContext(UserContext);

 const hanldeLogOut = () =>{
   logOut()
   .then(() => {
    setLoading(false);
   })
   .catch(error => {
    console.log(error);
    setLoading(false)
   })
 }


 if (loading) {
  return (
      <div className='w-full h-screen flex justify-center items-center'><span className="loading loading-spinner text-theme-color"></span></div>
  )
}
   
    return(
<div id='home' className="navbar bg-base-100 pb-5 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="z-50 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
  <div className="navbar-end gap-4">
      <button onClick={hanldeLogOut}
      className={`${user ? '' : 'hidden'} flex justify-center items-center gap-2 text-xl button primary-outline-button`}> 
      <p>LogOut</p>
      <IoIosLogOut></IoIosLogOut>
    </button>

    <Link to={"/login"}
    className={`${user ? 'hidden' : ''} flex justify-center items-center gap-2 text-xl button primary-outline-button`}> 
        <p>Log In</p>
        <IoIosLogIn></IoIosLogIn>    
    </Link>

  </div>
</div>
    )
}

export default Header;