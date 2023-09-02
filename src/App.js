import React, { Suspense, lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Body_layout from "./Components/Body";
import Header_layout from "./Components/Header";
import Footer_layout from "./Components/Footer";
import About_layout from "./Components/About";
import Contact_Layout from "./Components/Contact";
import RestaurantMenu_Layout from "./Components/RestaurantMenu";
import Error_Layout from "./Components/Error";
import{createBrowserRouter,RouterProvider,Outlet}from "react-router-dom";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart_layout from "./Components/Cart";


const Grocery = lazy(()=>import("./Components/Grocery"))

//Main App layout
const App_layout = () => {
  const[Username,SetUsername]=useState("Tanuj Malik")

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{username:Username ,SetUsername}}>
    <div className="app_container">
      <Header_layout />
      <Outlet/>
      <Footer_layout />
    </div>
    </userContext.Provider>
    </Provider>
  );
};
const router=createBrowserRouter([
  {
    path:"/",
    element:<App_layout/>,
    errorElement:<Error_Layout/>,
    children:[
      {
        path:"/",
        element:<Body_layout/>
      },
      {
        path:"/about",
        element:<About_layout/>
      },
      {
        path:"/contact",
        element:<Contact_Layout/>
      },
      {
        path:"/cart",
        element:<Cart_layout/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>
          Loding...
        </h1>}><Grocery/></Suspense>
      },
      {
        path:"/restaurantmenu/:resId",
        element:<RestaurantMenu_Layout/>
      },
    ]
  },
  
]);

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={router}/>);
