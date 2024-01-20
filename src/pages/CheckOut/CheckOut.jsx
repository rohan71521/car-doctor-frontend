import {  useLoaderData } from "react-router-dom";
import SharedBanner from "../../shared/Banner/SharedBanner";
import AnotherHeader from "../../shared/Header/AnotherHeader";
import { useContext } from "react";
import { UserContext } from "../../contextAPI/AuthContext";
import Swal from 'sweetalert2'



function CheckOut() {
    const data = useLoaderData()
    const {_id, price, img, title , service_id} = data
    console.log(data);

    const {user} = useContext(UserContext);
    console.log(user);

    const handleOrderSubmit = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const date = e.target.date.value;
        const phone = e.target.phone.value;
        const email = user?.email;
        const CustomerMessage = e.target.message.value
        const order = {
            OrderInfo:{
                _id,
                price,
                img,
                title,
                service_id
            },
            CustomerName : name,
            email,
            date,
            phone,
            CustomerMessage
        }
       fetch(`http://localhost:5000/order`,{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(order)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
          if (data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Order Confirm Successfully',
                icon: 'success',
                confirmButtonText: 'Go to cart'
              })
          }
       })
       .catch(error => {
        if (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
       })
    }

    return (
        <div>
            <AnotherHeader></AnotherHeader>
            <SharedBanner heading={'Check Out'} route={'Home / Check Out'}></SharedBanner>

            <main className="py-10 lg:py-20">
                <form  className="bg-shadow-color p-3 md:p-10 lg:px-32 space-y-5 rounded-xl"
                 onSubmit={handleOrderSubmit}>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="w-full">
                            <label htmlFor="name"><p>Enter Your Name :</p> </label>
                            <input placeholder=" Name"
                            defaultValue={user?.displayName}
                                className="w-full p-3" type="text"
                                name="name" id="name"
                                required />
                        </div>

                        <div className="w-full">
                            <label htmlFor="date"><p>Date You Want to Book Service :</p></label>
                            <input
                                    className="w-full p-3" type="date"
                                    name="date" id="date" 
                                    required/>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="w-full">
                        <label htmlFor="phone"><p>Enter Your Phone Number</p></label>
                        <input placeholder="Phone"
                         className="w-full p-3"
                          type="number" name="phone" 
                          id="phone"
                          required />
                    </div>

                    <div  className="w-full">
                        <label htmlFor="email">
                            <p>Enter Email</p>
                        </label>
                    <input placeholder="Email" 
                        className="w-full p-3" 
                        defaultValue={user?.email}
                        type="email" name="email" 
                        id="email" 
                        required/>
                    </div>
                    </div>
                    <div>
                        <textarea placeholder="Message" 
                        className="w-full p-3" name="message" 
                        id="message" cols="30" rows="10"
                        defaultValue={'Dear Customer Please, Add a Message For Proper Information'}></textarea>
                    </div>

                    
                        <button
                         className="button primary-fill-button-2 w-full mt-5"
                         >submit</button>
                </form>
            </main>
        </div>
    )
}

export default CheckOut;