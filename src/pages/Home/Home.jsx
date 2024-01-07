import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import Banner from "./Banner";
import About from "./About";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md"
import Services from "./Services";



function Home() {


    return(
        <div className="flex flex-col min-h-screen relative">
           <Header></Header>
           <div className="flex-grow">
           <Banner></Banner>
           <About></About>
           <Services></Services>
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
export default Home;