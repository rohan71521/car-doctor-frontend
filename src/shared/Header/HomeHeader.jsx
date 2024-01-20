import { Link } from "react-router-dom";
import Header from "./Header";
import { useContext } from "react";
import { UserContext } from "../../contextAPI/AuthContext";



function HomeHeader(){
    const {user} = useContext(UserContext)
    const links = <>
    <a href="#about" className="lg:mr-7 font-bold hover:text-theme-color">About</a>
    <a href="#services" className="lg:mr-7 font-bold hover:text-theme-color">Services</a>
    <a href="#" className="lg:mr-7 font-bold hover:text-theme-color">Blog</a>
    <a href="#" className="lg:mr-7 font-bold hover:text-theme-color">Contact</a>
   { user &&  <Link to={"/order"} className="lg:mr-7 font-bold hover:text-theme-color">Order</Link>}
    </>

    return(
        <div>
            <Header links={links}></Header>
        </div>
    )
}

export default HomeHeader;