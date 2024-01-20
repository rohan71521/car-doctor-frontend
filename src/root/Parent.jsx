import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";



function Parent() {
    
    return(
        <div className="flex flex-col min-h-screen relative">
           <div className="flex-grow">
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
           <a href="#home" className="fixed bottom-10 right-5
            bg-theme-color btn btn-circle text-third-color
             hover:text-second-color text-xl z-50">
           <MdOutlineKeyboardDoubleArrowUp />
           </a >
        </div>
    )
}

export default Parent;