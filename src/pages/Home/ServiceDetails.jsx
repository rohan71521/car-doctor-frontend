import { useLoaderData } from "react-router-dom";
import SharedBanner from "../../shared/Banner/SharedBanner";



function ServiceDetails() {
    const data = useLoaderData();
    console.log(data);

    return(
        <div>
         <SharedBanner 
         heading={'Service Details'}
         route={`Home / Service Details`}
         ></SharedBanner>

        <main className="grid md:grid-cols-3 gap-32 py-20 p-5">
          {/* left side content */}
        <section className="md:col-span-2 bg">
          <div className="md:h-96 rounded-md">
           <img className="w-full h-full rounded-md object-cover " src={data?.img} alt="" />
          </div>
          <h3 className="py-5">{data?.title}</h3>
          <p>{data?.description}</p>

        {/* facility */}
          <div className="grid grid-cols-2 gap-7 py-10">
            {
                data?.facility.map((facy)=>(
                    <div key={data._id} className="p-10 bg-shadow-color border-t-4 border-theme-color rounded-lg">
                        <h4 className="pb-2">{facy.name}</h4>
                        <p>{facy.details}</p>
                    </div>
                ))
            }
          </div>
        </section>

        {/* right side content */}
        <section>

        </section>
        </main>
        </div>
    )
}

export default ServiceDetails;