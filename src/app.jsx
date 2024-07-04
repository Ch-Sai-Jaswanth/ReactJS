import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import User from "./components/User.jsx";  
import UserClass from "./components/UserClass.jsx";

const AppComp = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppComp />,
        children : [
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu />
            }
        ],
        errorElement : <Error />
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={ appRouter } />);