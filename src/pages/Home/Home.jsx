
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import HomeHeader from "../../shared/Header/HomeHeader";
import Location from "./Location";



function Home() {


    return(
        <div>
            <HomeHeader></HomeHeader>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <Location></Location>

        </div>
    )
}
export default Home;