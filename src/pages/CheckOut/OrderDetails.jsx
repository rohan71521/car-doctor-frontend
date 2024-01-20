import { useContext, useState } from "react";
import SharedBanner from "../../shared/Banner/SharedBanner";
import AnotherHeader from "../../shared/Header/AnotherHeader";
import { UserContext } from "../../contextAPI/AuthContext";
import { useEffect } from "react";



function OrderDetails() {
    const [orders, setOrders] = useState([])
    const {user} = useContext(UserContext);

    useEffect(()=>{
        fetch(`http://localhost:5000/order?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>setOrders(data))
    },[user?.email])
    
    return(
        <div>
            <AnotherHeader></AnotherHeader>
            <SharedBanner heading={`Cart Details`} route={'Home - Product Details'}></SharedBanner>

            <main className="py-20">
                <div>
                    {
                        orders.map(order=>(
                            <div  className="mb-5" key={order._id}>
                                <div className="md:flex justify-between items-center">
                                <div className="md: flex justify-center items-center gap-5">
                                <div className="font-bold btn btn-circle bg-base-300">X</div>
                                    <img className="w-40 h-40 rounded-md object-cover" 
                                    src={order.OrderInfo.img} alt="" />
                                    <h4>{order.OrderInfo.title}</h4>
                                </div>
                                    <p>${order.OrderInfo.price}</p>
                                    <p>{order.date}</p>
                                    <button className="button primary-fill-button-2">pending</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

export default OrderDetails;