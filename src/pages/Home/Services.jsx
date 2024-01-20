import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";



function Services() {
    const [services, setSerevices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setSerevices(data))
    },[])
    
    return(
        <div className="py-10" id="services">
            <h4 className="text-center text-theme-color">Services</h4>
            <h2 className="text-center py-5">Our Service Area</h2>
            <p className="text-center mx-auto max-w-lg pb-7">the majority have suffered alteration in some form, by injected humour,
                 or randomised  words which don&apos;t look even slightly believable. 
            </p>

            <div className="grid grid-cols-2  md:grid-cols-3 gap-3">
                {
                    services.map((service, indx) => (
                        <div key={`service${indx}`}
                        className="bg-shadow-color border-neutral-300 border rounded-md p-1 md:p-5 flex flex-col">
                             <img className=" rounded-md md:h-40 h-24 lg:h-60 w-full" src={service.img} alt="" />
                            <h4 className="py-4 flex-grow">{service.title}</h4>

                            <div className="flex justify-between items-center text-theme-color">
                                <p className="font-bold "> ${service.price}</p>
                                 <Link to={`/service_details/${service._id}`}
                                  className=" btn btn-circle text-theme-color hover:bg-theme-color hover:text-shadow-color
                            "><FaArrowRight /></Link>
                            </div>
                        
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services;