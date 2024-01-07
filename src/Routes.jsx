import {createBrowserRouter}from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/login_register/Register";
import Login from "./pages/login_register/Login";

    
    export const router = createBrowserRouter([
        {
          path: "/",
          element: <Home></Home>,
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


