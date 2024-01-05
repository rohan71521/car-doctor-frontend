import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import Banner from "./Banner";



function Home() {


    return(
        <div className="flex flex-col min-h-screen">
           <Header></Header>
           <div className="flex-grow">
           <Banner></Banner>
           </div>
           <Footer></Footer>
        </div>
    )
}
export default Home;