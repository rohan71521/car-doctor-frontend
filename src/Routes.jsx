import {createBrowserRouter}from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/login_register/Register";
import Login from "./pages/login_register/Login";
import Parent from "./root/Parent";
import ServiceDetails from "./pages/Home/ServiceDetails";
import CheckOut from "./pages/CheckOut/CheckOut";

    
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
              path:"/service_details/:id",
              element:<ServiceDetails></ServiceDetails>,
              loader:({params})=> fetch( `http://localhost:5000/service/${params.id}` )
            },
            {
              path:"/checkout",
              element:<CheckOut></CheckOut>
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


