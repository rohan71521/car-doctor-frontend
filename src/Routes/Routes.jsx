import {createBrowserRouter}from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/login_register/Register";
import Login from "../pages/login_register/Login";
import Parent from "../root/Parent";
import ServiceDetails from "../pages/Home/ServiceDetails";
import CheckOut from "../pages/CheckOut/CheckOut";
import RsUseServices from "../ReUseCompos/RsUseServices";
import OrderDetails from "../pages/CheckOut/OrderDetails";
import PrivateRoute from "./PrivateRoute";



    

    
    export const router = createBrowserRouter([
        {
          path: "/",
          element: <Parent></Parent>,
          children : [
            {
              path:"/",
              element:<Home></Home>
            },
            {
              path:"/services",
              element:<RsUseServices></RsUseServices>
            },
            {
              path:"/service_details/:id",
              element:<ServiceDetails></ServiceDetails>,
              loader:()=> fetch( `http://localhost:5000/services` )
            },
            {
              path:"/checkout/:id",
              element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
              loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
              path:"/order",
              element:<PrivateRoute><OrderDetails></OrderDetails></PrivateRoute>,
            }
          ]
        },
        {
          path:"/register",
          element: <Register></Register>
        },
        {
          path:"/login",
          element: <Login></Login>
        }
      ]);

