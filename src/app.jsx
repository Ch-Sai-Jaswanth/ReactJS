import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";

const AppComp = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppComp />,
        errorElement : <Error />
    },
    {
        path : "/about",
        element : <About />
    },
    {
        path : "/contact",
        element : <Contact />
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={ appRouter } />);