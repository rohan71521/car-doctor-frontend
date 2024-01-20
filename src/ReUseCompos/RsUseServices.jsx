import Services from "../pages/Home/Services";
import SharedBanner from "../shared/Banner/SharedBanner";
import AnotherHeader from "../shared/Header/AnotherHeader";


function RsUseServices() {
    
    return(
        <div>
            <AnotherHeader></AnotherHeader>
            <SharedBanner heading={'Services'} route={'Home / Services'}></SharedBanner>
            <Services></Services>
        </div>
    )
}

export default RsUseServices;