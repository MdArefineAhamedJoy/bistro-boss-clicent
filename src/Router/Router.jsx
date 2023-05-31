import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import Secret from "../Pages/Sheard/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DeashBoard from "../Layout/DeashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:`/order/:category`,
          element:<Order></Order>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:'singUp',
          element:<SingUp></SingUp>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path:"/dashboard",
      element: <DeashBoard></DeashBoard>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: "allusers",
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);

  export default router