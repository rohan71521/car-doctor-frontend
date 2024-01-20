import { Link } from "react-router-dom";
import Header from "./Header";
import { useContext } from "react";
import { UserContext } from "../../contextAPI/AuthContext";



function AnotherHeader(){
    const {user} = useContext(UserContext)
    const links = <>
    <Link to={"/"} className="lg:mr-7 font-bold hover:text-theme-color">Home</Link>
    <Link to={"/services"} className="lg:mr-7 font-bold hover:text-theme-color">Services</Link>
    <Link to={"/blog"} className="lg:mr-7 font-bold hover:text-theme-color">Blog</Link>
    <Link to={"/contact"} className="lg:mr-7 font-bold hover:text-theme-color">Contact</Link>
   {
    user &&  <Link to={"/order"} className="lg:mr-7 font-bold hover:text-theme-color">Order</Link>
   }
    </>

    return(
        <div>
            <Header links={links}></Header>
        </div>
    )
}

export default AnotherHeader;